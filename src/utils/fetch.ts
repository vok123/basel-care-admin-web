// filepath: /Users/evanzhou/Desktop/work/BaselMedical/utils/fetchRN.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import i18n from "@/locales/config";
import { TOKEN } from "@/utils/config";
import { message } from "antd";
import { getLocalInfo, removeLocalInfo } from "@south/utils";

const { t } = i18n;

// 定义响应数据接口
export interface ResponseData<T = any> {
  code: number;
  data: T;
  msg: string;
}
export interface AxiosRequestConfigExtended extends AxiosRequestConfig {
  /** 是否不需要token */
  noToken?: boolean;
}

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000, // 请求超时时间
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

// 请求拦截器
service.interceptors.request.use(
  async (config) => {
    try {
      if ((config as any).noToken !== true) {
        const token = getLocalInfo(TOKEN);
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }
    } catch (error) {
      console.error("获取token失败", error);
    }
    return config;
  },
  (error) => {
    console.error("请求错误: ", error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    const res = response.data;

    // 根据code判断请求是否成功
    if (res.code !== 0) {
      console.log(JSON.stringify(response.config, null, 2));
      // 错误处理，使用Toast显示错误信息
      message.error(res.msg);

      // 特定错误码处理，例如未授权
      if ([401, 403].includes(res.code)) {
        // 登录过期或未登录，清除token
        removeLocalInfo(TOKEN);
        // 跳转到登录页面
        setTimeout(() => {
          window.location.hash = "/login";
        }, 200);
      }

      return Promise.reject(new Error(res.msg || "请求失败"));
    }
    return response;
  },
  (error) => {
    console.error("响应错误:", error);

    const status = error.response?.status;
    // 获取错误信息
    const errMsg =
      error.response?.data?.msg || error.message || t("Network error");

    const noMessageUrls = [
      "doctor/getConsultationPage",
      "doctor/getConsultation",
    ];
    const isNoMessage = noMessageUrls.some((url) =>
      error.config.url?.includes(url),
    );

    if (!isNoMessage) {
      message.error(errMsg);
    }

    if (status === 401 || status === 403) {
      removeLocalInfo(TOKEN);
      // 跳转到登录页面
      setTimeout(() => {
        window.location.hash = "/login";
      }, 200);
    }

    return Promise.reject(error);
  },
);

// 封装GET请求
export function get<T = any>(
  url: string,
  params?: any,
  config?: AxiosRequestConfigExtended,
): Promise<ResponseData<T>> {
  return service
    .get(url, { params, ...config })
    .then((response) => response.data);
}

// 封装POST请求
export function post<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfigExtended,
): Promise<ResponseData<T>> {
  return service.post(url, data, config).then((response) => response.data);
}

// 封装PUT请求
export function put<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfigExtended,
): Promise<ResponseData<T>> {
  return service.put(url, data, config).then((response) => response.data);
}

// 封装DELETE请求
export function del<T = any>(
  url: string,
  config?: AxiosRequestConfigExtended,
): Promise<ResponseData<T>> {
  return service.delete(url, config).then((response) => response.data);
}

// 导出axios实例，方便自定义使用
export default service;
