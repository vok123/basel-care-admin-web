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

const mockUrl_0_0_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_0_0_0 = 'http://127.0.0.1' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = 'data' as any

/**
 * 接口 修改密码 的 **请求类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/updatePassword`
 */
export interface IPostUserUpdatePasswordReq {
  /**
   * 邮箱
   */
  email?: string
  /**
   * 校验码
   */
  code?: string
  /**
   * 新密码
   */
  password?: string
}

/**
 * 接口 修改密码 的 **返回类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/updatePassword`
 */
export type IPostUserUpdatePasswordRes = boolean

/**
 * 接口 修改密码 的 **请求配置的类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/updatePassword`
 */
type PostUserUpdatePasswordRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/user/updatePassword',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 修改密码 的 **请求配置**
 *
 * @分类 用户中心
 * @请求头 `POST /user/updatePassword`
 */
const postUserUpdatePasswordRequestConfig: PostUserUpdatePasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/user/updatePassword',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postUserUpdatePassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改密码 的 **请求函数**
 *
 * @分类 用户中心
 * @请求头 `POST /user/updatePassword`
 */
export const postUserUpdatePassword = /*#__PURE__*/ (
  requestData: IPostUserUpdatePasswordReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostUserUpdatePasswordRes>(prepare(postUserUpdatePasswordRequestConfig, requestData), ...args)
}

postUserUpdatePassword.requestConfig = postUserUpdatePasswordRequestConfig

/**
 * 接口 修改密码 的 **React Hook**
 *
 * @分类 用户中心
 * @请求头 `POST /user/updatePassword`
 */
export const usePostUserUpdatePassword = /*#__PURE__*/ makeRequestHook<
  IPostUserUpdatePasswordReq,
  PostUserUpdatePasswordRequestConfig,
  ReturnType<typeof postUserUpdatePassword>
>(postUserUpdatePassword)

/**
 * 接口 发送邮件验证码 的 **请求类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/sendEmailCode`
 */
export interface IPostUserSendEmailCodeReq {
  /**
   * 邮箱
   */
  email?: string
  /**
   * 验证码
   */
  checkCode?: string
}

/**
 * 接口 发送邮件验证码 的 **返回类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/sendEmailCode`
 */
export type IPostUserSendEmailCodeRes = boolean

/**
 * 接口 发送邮件验证码 的 **请求配置的类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/sendEmailCode`
 */
type PostUserSendEmailCodeRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/user/sendEmailCode',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 发送邮件验证码 的 **请求配置**
 *
 * @分类 用户中心
 * @请求头 `POST /user/sendEmailCode`
 */
const postUserSendEmailCodeRequestConfig: PostUserSendEmailCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/user/sendEmailCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postUserSendEmailCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 发送邮件验证码 的 **请求函数**
 *
 * @分类 用户中心
 * @请求头 `POST /user/sendEmailCode`
 */
export const postUserSendEmailCode = /*#__PURE__*/ (
  requestData: IPostUserSendEmailCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostUserSendEmailCodeRes>(prepare(postUserSendEmailCodeRequestConfig, requestData), ...args)
}

postUserSendEmailCode.requestConfig = postUserSendEmailCodeRequestConfig

/**
 * 接口 发送邮件验证码 的 **React Hook**
 *
 * @分类 用户中心
 * @请求头 `POST /user/sendEmailCode`
 */
export const usePostUserSendEmailCode = /*#__PURE__*/ makeRequestHook<
  IPostUserSendEmailCodeReq,
  PostUserSendEmailCodeRequestConfig,
  ReturnType<typeof postUserSendEmailCode>
>(postUserSendEmailCode)

/**
 * 接口 登录 的 **请求类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/login`
 */
export interface IPostUserLoginReq {
  username?: string
  password?: string
}

/**
 * 接口 登录 的 **返回类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/login`
 */
export interface IPostUserLoginRes {
  token?: string
}

/**
 * 接口 登录 的 **请求配置的类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/login`
 */
type PostUserLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', 'http://127.0.0.1', '', '/user/login', 'data', string, string, false>
>

/**
 * 接口 登录 的 **请求配置**
 *
 * @分类 用户中心
 * @请求头 `POST /user/login`
 */
const postUserLoginRequestConfig: PostUserLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/user/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postUserLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 登录 的 **请求函数**
 *
 * @分类 用户中心
 * @请求头 `POST /user/login`
 */
export const postUserLogin = /*#__PURE__*/ (requestData: IPostUserLoginReq, ...args: UserRequestRestArgs) => {
  return request<IPostUserLoginRes>(prepare(postUserLoginRequestConfig, requestData), ...args)
}

postUserLogin.requestConfig = postUserLoginRequestConfig

/**
 * 接口 登录 的 **React Hook**
 *
 * @分类 用户中心
 * @请求头 `POST /user/login`
 */
export const usePostUserLogin = /*#__PURE__*/ makeRequestHook<
  IPostUserLoginReq,
  PostUserLoginRequestConfig,
  ReturnType<typeof postUserLogin>
>(postUserLogin)

/**
 * 接口 忘记密码 的 **请求类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/forgotPassword`
 */
export interface IPostUserForgotPasswordReq {
  /**
   * 邮箱
   */
  email?: string
  /**
   * 验证码
   */
  checkCode?: string
}

/**
 * 接口 忘记密码 的 **返回类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/forgotPassword`
 */
export type IPostUserForgotPasswordRes = boolean

/**
 * 接口 忘记密码 的 **请求配置的类型**
 *
 * @分类 用户中心
 * @请求头 `POST /user/forgotPassword`
 */
type PostUserForgotPasswordRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/user/forgotPassword',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 忘记密码 的 **请求配置**
 *
 * @分类 用户中心
 * @请求头 `POST /user/forgotPassword`
 */
const postUserForgotPasswordRequestConfig: PostUserForgotPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/user/forgotPassword',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postUserForgotPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 忘记密码 的 **请求函数**
 *
 * @分类 用户中心
 * @请求头 `POST /user/forgotPassword`
 */
export const postUserForgotPassword = /*#__PURE__*/ (
  requestData: IPostUserForgotPasswordReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostUserForgotPasswordRes>(prepare(postUserForgotPasswordRequestConfig, requestData), ...args)
}

postUserForgotPassword.requestConfig = postUserForgotPasswordRequestConfig

/**
 * 接口 忘记密码 的 **React Hook**
 *
 * @分类 用户中心
 * @请求头 `POST /user/forgotPassword`
 */
export const usePostUserForgotPassword = /*#__PURE__*/ makeRequestHook<
  IPostUserForgotPasswordReq,
  PostUserForgotPasswordRequestConfig,
  ReturnType<typeof postUserForgotPassword>
>(postUserForgotPassword)

/* prettier-ignore-end */
