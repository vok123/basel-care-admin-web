import type { RequestFunctionParams } from "yapi-to-typescript";
import { get, post, del, put } from "./fetch";

export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: "prod" | "dev" | "mock";
  /** 是否使用token */
  noToken?: boolean;
}

export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: "prod",
    noToken: false,
  },
): Promise<TResponseData> {
  return new Promise<TResponseData>((resolve, reject) => {
    // 请求地址
    const url = payload.path;

    // 具体请求逻辑
    const method = payload.method.toLowerCase();
    let requestPromise: Promise<any>;

    const configExtends = {
      noToken: options.noToken,
    };

    // 根据不同的请求方法调用不同的方法
    switch (method) {
      case "get":
        requestPromise = get(url, { params: payload.data }, configExtends);
        break;
      case "post":
        requestPromise = post(url, payload.data, configExtends);
        break;
      case "put":
        requestPromise = put(url, payload.data, configExtends);
        break;
      case "delete":
        requestPromise = del(url, { data: payload.data, ...configExtends });
        break;
      default:
        requestPromise = get(url, { params: payload.data }, configExtends);
    }

    // 处理响应
    requestPromise
      .then((responseData) => {
        if (responseData.code === 0) {
          resolve(responseData.data as TResponseData);
        } else {
          reject(new Error(responseData.msg || "请求失败"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
