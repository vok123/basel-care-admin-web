/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from '../utils/yapi-request'
// @ts-ignore
import makeRequestHook from './makeRequestHook'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_3_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_3_0_0 = 'http://127.0.0.1' as any
const prodUrl_0_3_0_0 = '' as any
const dataKey_0_3_0_0 = 'data' as any

/**
 * 接口 列出所有国家区域 的 **请求类型**
 *
 * @分类 国家
 * @请求头 `GET /countries/list`
 */
export interface IGetCountriesListReq {}

/**
 * 接口 列出所有国家区域 的 **返回类型**
 *
 * @分类 国家
 * @请求头 `GET /countries/list`
 */
export type IGetCountriesListRes = {
  /**
   * 国家/地区名称
   */
  enName?: string
  /**
   * 中文国家/地区名称
   */
  cnName?: string
  /**
   * 国家码
   */
  countryCode?: string
  /**
   * 国际电话区号
   */
  phoneCode?: string
}[]

/**
 * 接口 列出所有国家区域 的 **请求配置的类型**
 *
 * @分类 国家
 * @请求头 `GET /countries/list`
 */
type GetCountriesListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/countries/list',
    'data',
    string,
    string,
    true
  >
>

/**
 * 接口 列出所有国家区域 的 **请求配置**
 *
 * @分类 国家
 * @请求头 `GET /countries/list`
 */
const getCountriesListRequestConfig: GetCountriesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_3_0_0,
  devUrl: devUrl_0_3_0_0,
  prodUrl: prodUrl_0_3_0_0,
  path: '/countries/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_3_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCountriesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 列出所有国家区域 的 **请求函数**
 *
 * @分类 国家
 * @请求头 `GET /countries/list`
 */
export const getCountriesList = /*#__PURE__*/ (requestData?: IGetCountriesListReq, ...args: UserRequestRestArgs) => {
  return request<IGetCountriesListRes>(prepare(getCountriesListRequestConfig, requestData), ...args)
}

getCountriesList.requestConfig = getCountriesListRequestConfig

/**
 * 接口 列出所有国家区域 的 **React Hook**
 *
 * @分类 国家
 * @请求头 `GET /countries/list`
 */
export const useGetCountriesList = /*#__PURE__*/ makeRequestHook<
  IGetCountriesListReq,
  GetCountriesListRequestConfig,
  ReturnType<typeof getCountriesList>
>(getCountriesList)

/* prettier-ignore-end */
