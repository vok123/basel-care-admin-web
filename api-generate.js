// @ts-nocheck
import fs from 'node:fs';
import path from 'node:path';
import axios from 'axios';
import http from 'http';
import yapi from 'yapi-to-typescript/lib/cjs/Generator.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

/**
 * @typedef {Object} GenerateConfig
 * @property {number} PROJECT_ID
 * @property {string} ACCESS_TOKEN
 * @property {string[]} excludeTags
 * @property {string[]} excludeApis
 */

/**
 * @typedef {Object} SwaggerJson
 * @property {Array<{name: string}>} tags
 * @property {Record<string, any>} paths
 * @property {Object} info
 * @property {string} info.title
 * @property {string} info.description
 * @property {string} info.version
 */

class Generate {
  static description = 'Generate apifox api';

  constructor() {
    this.staticPort = 22222;
    this.apiRoot = 'src/api';
    this.configFileName = '.apifox-info.json';
  }

  /**
   * 获取项目根目录
   * @returns {string}
   */
  getProjectRoot() {
    return path.resolve(process.cwd()) + '/';
  }

  /**
   * 检查配置文件是否存在
   */
  checkConfigFile() {
    const projectDirs = this.getProjectRoot();
    const configDirs = projectDirs + this.configFileName;
    const isConfigExist = fs.existsSync(configDirs);
    if (!isConfigExist) {
      const jsonTemplate = `{
  "PROJECT_ID": xxx,
  "ACCESS_TOKEN": "xxxx",
  "excludeTags": [],
  "excludeApis": []
}`;
      throw new Error(
        'Place add .apifox-info.json file in the root directory of the project. \nConfig just like this: \n' +
        jsonTemplate
      );
    }
  }

  /**
   * 获取Swagger文档JSON
   * @returns {Promise<SwaggerJson|undefined>}
   */
  async fetchSwaggerDocJson() {
    this.checkConfigFile();
    const jsonStr = fs.readFileSync('./' + this.configFileName, 'utf-8');
    /** @type {GenerateConfig} */
    const apifoxInfo = JSON.parse(jsonStr);
    const PROJECT_ID = apifoxInfo.PROJECT_ID;
    const ACCESS_TOKEN = apifoxInfo.ACCESS_TOKEN;

    if (!PROJECT_ID || !ACCESS_TOKEN) {
      throw new Error('Please fill in the PROJECT_ID and ACCESS_TOKEN in .apifox-info.json file.');
    }

    const APIFOX_EXPORT_URL = `https://api.apifox.com/v1/projects/${PROJECT_ID}/export-openapi?locale=zh-CN`;

    try {
      const response = await axios.post(
        APIFOX_EXPORT_URL,
        {
          scope: {
            type: 'ALL',
            excludedByTags: []
          },
          options: {
            includeApifoxExtensionProperties: false,
            addFoldersToTags: false
          },
          oasVersion: '3.0',
          exportFormat: 'JSON'
        },
        {
          responseType: 'json',
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'X-Apifox-Api-Version': '2024-03-28'
          }
        }
      );

      /** @type {SwaggerJson} */
      const data = response.data;

      // 过滤排除的标签
      if (apifoxInfo.excludeTags?.length) {
        data.tags = data.tags?.filter((tag) => !apifoxInfo.excludeTags.includes(tag.name));

        Object.entries(data.paths)?.forEach((pathItem) => {
          const [key, apiConfig] = pathItem;
          const isMatchTag = Object.values(apiConfig)?.some((config) => {
            if (!config.tags.length) return false;
            return config.tags?.some((tag) => apifoxInfo.excludeTags.includes(tag));
          });

          if (isMatchTag) {
            delete data.paths[key];
          }
        });
      }

      // 过滤WebSocket接口
      Object.keys(data.paths).forEach(url => {
        const value = data.paths[url];
        if ('wss' in value) {
          delete data.paths[url];
        }
      });

      // 过滤排除的API
      if (apifoxInfo.excludeApis?.length) {
        apifoxInfo.excludeApis.forEach((apiPath) => {
          delete data.paths[apiPath];
        });
      }

      console.log('Fetch OpenAPI specification successfully.');
      fs.writeFileSync(this.getProjectRoot() + 'node_modules/.swagger.json', JSON.stringify(data, null, 2));
      return data;
    } catch (error) {
      console.error('Error fetching OpenAPI specification:', error);
      return undefined;
    }
  }

  /**
   * 生成API文件
   * @param {SwaggerJson} swaggerDocJson 
   */
  async generate(swaggerDocJson) {
    /**
     * 获取接口名称
     * @param {string} dir 
     * @param {string} name 
     */
    const getName = (dir, name, changeCase) => {
      const dirName = dir
        .split('/')
        .filter((v) => !v.includes('{'))
        .join(' ');
      name = (name || '').includes('{') ? 'by ' + name : name;
      return changeCase.camelCase([dirName, name].join(' '));
    };

    /**
     * 获取请求数据类型名称
     * @param {any} interfaceInfo 
     * @param {any} changeCase 
     */
    const getRequestDataTypeName = (interfaceInfo, changeCase) => {
      const { name, dir } = interfaceInfo.parsedPath;
      return (
        'I' +
        changeCase.pascalCase(interfaceInfo.method) +
        changeCase.pascalCase(getName(dir, name, changeCase) + 'Req')
      );
    };

    // 提取API类别
    const categories = [];
    Object.keys(swaggerDocJson.paths).forEach((path) => {
      const [firstLevelAsCategories] = path.split('/').filter(Boolean);
      if (firstLevelAsCategories && !categories.includes(firstLevelAsCategories)) {
        categories.push(firstLevelAsCategories);
      }
    });

    // 创建项目配置
    const projects = categories.map((tag, index) => {
      return {
        token: '',
        categories: [
          {
            id: index + 1,
            outputFilePath: `${this.apiRoot}/${tag}.ts`,
            getRequestDataTypeName
          }
        ]
      };
    });

    // 确保目标目录存在
    const apiDir = path.join(this.getProjectRoot(), this.apiRoot);
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }

    // 生成API文件
    const generator = new yapi.Generator(
      {
        serverUrl: `http://localhost:${this.staticPort}`,
        serverType: 'swagger',
        typesOnly: false,
        target: 'typescript',
        devEnvName: 'local',
        reactHooks: {
          enabled: true
        },
        prodEnvName: 'production',
        requestFunctionFilePath: 'src/utils/yapi-request.ts',
        dataKey: 'data',
        comment: {
          requestHeader: true
        },
        getResponseDataTypeName(interfaceInfo, changeCase) {
          const { name, dir } = interfaceInfo.parsedPath;
          return (
            'I' +
            changeCase.pascalCase(interfaceInfo.method) +
            changeCase.pascalCase(getName(dir, name, changeCase) + 'Res')
          );
        },
        getRequestFunctionName(interfaceInfo, changeCase) {
          let { dir, name } = interfaceInfo.parsedPath;
          return changeCase.camelCase([interfaceInfo.method, getName(dir, name, changeCase)].join(' '));
        },
        projects
      },
      { cwd: process.cwd() }
    );

    await generator.prepare();
    const output = await generator.generate();
    await generator.write(output);
    this.generateApiIndex(categories);
  }

  /**
   * 生成API索引文件
   * @param {string[]} categories 
   */
  generateApiIndex(categories) {
    const exportList = categories.map((tag) => {
      return `export * from './${tag}';`;
    });
    const template = `// @ts-nocheck
${exportList.join('\n')}
`;
    fs.writeFileSync(`${this.apiRoot}/index.ts`, template);
  }

  /**
   * 运行生成
   */
  async run() {
    try {
      const swaggerDocJson = await this.fetchSwaggerDocJson();
      if (!swaggerDocJson) {
        throw new Error('Failed to fetch Swagger documentation');
      }

      const server = http.createServer((_, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(swaggerDocJson));
      });

      server.listen(this.staticPort, async () => {
        console.log(`Local server started on port ${this.staticPort}`);
        await this.generate(swaggerDocJson);
        console.log('Generate api success at ' + this.apiRoot);
        server.close(async () => {
          process.exit(0);
        });
      });
    } catch (err) {
      console.error('Error during API generation:', err.message);
    }
  }
}

const generate = new Generate();

generate.run().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});

export default generate;