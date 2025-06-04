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

const mockUrl_0_5_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_5_0_0 = 'http://127.0.0.1' as any
const prodUrl_0_5_0_0 = '' as any
const dataKey_0_5_0_0 = 'data' as any

/**
 * 接口 获取主页配置 的 **请求类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getMainPageConfig`
 */
export interface IGetConfigGetMainPageConfigReq {}

/**
 * 接口 获取主页配置 的 **返回类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getMainPageConfig`
 */
export interface IGetConfigGetMainPageConfigRes {}

/**
 * 接口 获取主页配置 的 **请求配置的类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getMainPageConfig`
 */
type GetConfigGetMainPageConfigRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/config/getMainPageConfig',
    'data',
    string,
    string,
    true
  >
>

/**
 * 接口 获取主页配置 的 **请求配置**
 *
 * @分类 配置
 * @请求头 `GET /config/getMainPageConfig`
 */
const getConfigGetMainPageConfigRequestConfig: GetConfigGetMainPageConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_5_0_0,
  devUrl: devUrl_0_5_0_0,
  prodUrl: prodUrl_0_5_0_0,
  path: '/config/getMainPageConfig',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_5_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getConfigGetMainPageConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取主页配置 的 **请求函数**
 *
 * @分类 配置
 * @请求头 `GET /config/getMainPageConfig`
 */
export const getConfigGetMainPageConfig = /*#__PURE__*/ (
  requestData?: IGetConfigGetMainPageConfigReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetConfigGetMainPageConfigRes>(prepare(getConfigGetMainPageConfigRequestConfig, requestData), ...args)
}

getConfigGetMainPageConfig.requestConfig = getConfigGetMainPageConfigRequestConfig

/**
 * 接口 获取主页配置 的 **React Hook**
 *
 * @分类 配置
 * @请求头 `GET /config/getMainPageConfig`
 */
export const useGetConfigGetMainPageConfig = /*#__PURE__*/ makeRequestHook<
  IGetConfigGetMainPageConfigReq,
  GetConfigGetMainPageConfigRequestConfig,
  ReturnType<typeof getConfigGetMainPageConfig>
>(getConfigGetMainPageConfig)

/**
 * 接口 获取介绍配置 的 **请求类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getIntroConfig`
 */
export interface IGetConfigGetIntroConfigReq {}

/**
 * 接口 获取介绍配置 的 **返回类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getIntroConfig`
 */
export type IGetConfigGetIntroConfigRes = {}[]

/**
 * 接口 获取介绍配置 的 **请求配置的类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getIntroConfig`
 */
type GetConfigGetIntroConfigRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/config/getIntroConfig',
    'data',
    string,
    string,
    true
  >
>

/**
 * 接口 获取介绍配置 的 **请求配置**
 *
 * @分类 配置
 * @请求头 `GET /config/getIntroConfig`
 */
const getConfigGetIntroConfigRequestConfig: GetConfigGetIntroConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_5_0_0,
  devUrl: devUrl_0_5_0_0,
  prodUrl: prodUrl_0_5_0_0,
  path: '/config/getIntroConfig',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_5_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getConfigGetIntroConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取介绍配置 的 **请求函数**
 *
 * @分类 配置
 * @请求头 `GET /config/getIntroConfig`
 */
export const getConfigGetIntroConfig = /*#__PURE__*/ (
  requestData?: IGetConfigGetIntroConfigReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetConfigGetIntroConfigRes>(prepare(getConfigGetIntroConfigRequestConfig, requestData), ...args)
}

getConfigGetIntroConfig.requestConfig = getConfigGetIntroConfigRequestConfig

/**
 * 接口 获取介绍配置 的 **React Hook**
 *
 * @分类 配置
 * @请求头 `GET /config/getIntroConfig`
 */
export const useGetConfigGetIntroConfig = /*#__PURE__*/ makeRequestHook<
  IGetConfigGetIntroConfigReq,
  GetConfigGetIntroConfigRequestConfig,
  ReturnType<typeof getConfigGetIntroConfig>
>(getConfigGetIntroConfig)

/**
 * 接口 获取过敏药物列表 的 **请求类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getAllergicDrugs`
 */
export interface IGetConfigGetAllergicDrugsReq {}

/**
 * 接口 获取过敏药物列表 的 **返回类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getAllergicDrugs`
 */
export type IGetConfigGetAllergicDrugsRes = string[]

/**
 * 接口 获取过敏药物列表 的 **请求配置的类型**
 *
 * @分类 配置
 * @请求头 `GET /config/getAllergicDrugs`
 */
type GetConfigGetAllergicDrugsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/config/getAllergicDrugs',
    'data',
    string,
    string,
    true
  >
>

/**
 * 接口 获取过敏药物列表 的 **请求配置**
 *
 * @分类 配置
 * @请求头 `GET /config/getAllergicDrugs`
 */
const getConfigGetAllergicDrugsRequestConfig: GetConfigGetAllergicDrugsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_5_0_0,
  devUrl: devUrl_0_5_0_0,
  prodUrl: prodUrl_0_5_0_0,
  path: '/config/getAllergicDrugs',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_5_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getConfigGetAllergicDrugs',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取过敏药物列表 的 **请求函数**
 *
 * @分类 配置
 * @请求头 `GET /config/getAllergicDrugs`
 */
export const getConfigGetAllergicDrugs = /*#__PURE__*/ (
  requestData?: IGetConfigGetAllergicDrugsReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetConfigGetAllergicDrugsRes>(prepare(getConfigGetAllergicDrugsRequestConfig, requestData), ...args)
}

getConfigGetAllergicDrugs.requestConfig = getConfigGetAllergicDrugsRequestConfig

/**
 * 接口 获取过敏药物列表 的 **React Hook**
 *
 * @分类 配置
 * @请求头 `GET /config/getAllergicDrugs`
 */
export const useGetConfigGetAllergicDrugs = /*#__PURE__*/ makeRequestHook<
  IGetConfigGetAllergicDrugsReq,
  GetConfigGetAllergicDrugsRequestConfig,
  ReturnType<typeof getConfigGetAllergicDrugs>
>(getConfigGetAllergicDrugs)

/* prettier-ignore-end */
