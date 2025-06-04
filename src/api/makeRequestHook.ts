import type { RequestConfig } from "yapi-to-typescript";
import type { Request } from "./user";
import baseRequest from "../utils/yapi-request";
import { useRequest } from "ahooks";

export default function makeRequestHook<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult extends ReturnType<typeof baseRequest>,
>(request: Request<TRequestData, TRequestConfig, TRequestResult>) {
  type Data = TRequestResult extends Promise<infer R> ? R : TRequestResult;
  return function useApiRequest(requestData?: TRequestData, options = {}) {
    return useRequest<Data, any>(
      () => request(requestData as any) as Promise<Data>,
      {
        refreshDeps: [JSON.stringify(requestData)],
        ...options,
      },
    );
  };
}
