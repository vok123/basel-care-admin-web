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

const mockUrl_0_1_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_1_0_0 = 'http://127.0.0.1' as any
const prodUrl_0_1_0_0 = '' as any
const dataKey_0_1_0_0 = 'data' as any

/**
 * 接口 修改详情 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/update`
 */
export interface IPostPatientUpdateReq {
  /**
   * id
   */
  id: number
  /**
   * 性别
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER'
  /**
   * firstName
   */
  firstName?: string
  /**
   * lastName
   */
  lastName?: string
  /**
   * 国家
   */
  country?: string
  /**
   * nricNumber
   */
  nricNumber?: string
  /**
   * 出生日期
   */
  address?: string
  /**
   * 药物过敏
   */
  drugAllergies?: string[]
}

/**
 * 接口 修改详情 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/update`
 */
export type IPostPatientUpdateRes = boolean

/**
 * 接口 修改详情 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/update`
 */
type PostPatientUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/update',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 修改详情 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/update`
 */
const postPatientUpdateRequestConfig: PostPatientUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改详情 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/update`
 */
export const postPatientUpdate = /*#__PURE__*/ (requestData: IPostPatientUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IPostPatientUpdateRes>(prepare(postPatientUpdateRequestConfig, requestData), ...args)
}

postPatientUpdate.requestConfig = postPatientUpdateRequestConfig

/**
 * 接口 修改详情 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/update`
 */
export const usePostPatientUpdate = /*#__PURE__*/ makeRequestHook<
  IPostPatientUpdateReq,
  PostPatientUpdateRequestConfig,
  ReturnType<typeof postPatientUpdate>
>(postPatientUpdate)

/**
 * 接口 发送消息 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/sendMessage`
 */
export interface IPostPatientSendMessageReq {
  /**
   * 咨询id
   */
  consultationId?: number
  /**
   * 消息内容
   */
  content?: string
}

/**
 * 接口 发送消息 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/sendMessage`
 */
export type IPostPatientSendMessageRes = boolean

/**
 * 接口 发送消息 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/sendMessage`
 */
type PostPatientSendMessageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/sendMessage',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 发送消息 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/sendMessage`
 */
const postPatientSendMessageRequestConfig: PostPatientSendMessageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/sendMessage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientSendMessage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 发送消息 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/sendMessage`
 */
export const postPatientSendMessage = /*#__PURE__*/ (
  requestData: IPostPatientSendMessageReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientSendMessageRes>(prepare(postPatientSendMessageRequestConfig, requestData), ...args)
}

postPatientSendMessage.requestConfig = postPatientSendMessageRequestConfig

/**
 * 接口 发送消息 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/sendMessage`
 */
export const usePostPatientSendMessage = /*#__PURE__*/ makeRequestHook<
  IPostPatientSendMessageReq,
  PostPatientSendMessageRequestConfig,
  ReturnType<typeof postPatientSendMessage>
>(postPatientSendMessage)

/**
 * 接口 注册 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/register`
 */
export interface IPostPatientRegisterReq {
  /**
   * 用户名
   */
  username?: string
  /**
   * 密码
   */
  password?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 验证码
   */
  code?: string
  /**
   * firstName
   */
  firstName?: string
  /**
   * lastName
   */
  lastName?: string
}

/**
 * 接口 注册 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/register`
 */
export type IPostPatientRegisterRes = boolean

/**
 * 接口 注册 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/register`
 */
type PostPatientRegisterRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/register',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 注册 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/register`
 */
const postPatientRegisterRequestConfig: PostPatientRegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/register',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientRegister',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 注册 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/register`
 */
export const postPatientRegister = /*#__PURE__*/ (
  requestData: IPostPatientRegisterReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientRegisterRes>(prepare(postPatientRegisterRequestConfig, requestData), ...args)
}

postPatientRegister.requestConfig = postPatientRegisterRequestConfig

/**
 * 接口 注册 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/register`
 */
export const usePostPatientRegister = /*#__PURE__*/ makeRequestHook<
  IPostPatientRegisterReq,
  PostPatientRegisterRequestConfig,
  ReturnType<typeof postPatientRegister>
>(postPatientRegister)

/**
 * 接口 读取消息 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/readMessage`
 */
export interface IPostPatientReadMessageReq {
  messageId: string
}

/**
 * 接口 读取消息 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/readMessage`
 */
export type IPostPatientReadMessageRes = boolean

/**
 * 接口 读取消息 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/readMessage`
 */
type PostPatientReadMessageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/readMessage',
    'data',
    string,
    'messageId',
    false
  >
>

/**
 * 接口 读取消息 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/readMessage`
 */
const postPatientReadMessageRequestConfig: PostPatientReadMessageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/readMessage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: ['messageId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientReadMessage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 读取消息 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/readMessage`
 */
export const postPatientReadMessage = /*#__PURE__*/ (
  requestData: IPostPatientReadMessageReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientReadMessageRes>(prepare(postPatientReadMessageRequestConfig, requestData), ...args)
}

postPatientReadMessage.requestConfig = postPatientReadMessageRequestConfig

/**
 * 接口 读取消息 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/readMessage`
 */
export const usePostPatientReadMessage = /*#__PURE__*/ makeRequestHook<
  IPostPatientReadMessageReq,
  PostPatientReadMessageRequestConfig,
  ReturnType<typeof postPatientReadMessage>
>(postPatientReadMessage)

/**
 * 接口 查询咨询 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultation`
 */
export interface IPostPatientGetConsultationReq {
  consultationId: string
}

/**
 * 接口 查询咨询 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultation`
 */
export interface IPostPatientGetConsultationRes {
  /**
   * 咨询id
   */
  id?: number
  /**
   * 患者id
   */
  patientId?: number
  /**
   * 患者姓名
   */
  patientName?: string
  /**
   * 医生id
   */
  doctorId?: number
  /**
   * 医生姓名
   */
  doctorName?: string
  /**
   * 未读消息数量
   */
  unreadMessageCount?: number
  /**
   * 预约id
   */
  appointmentId?: number
  /**
   * 诉求
   */
  chiefComplaint?: string
  /**
   * 用药历史
   */
  medicalHistory?: string
  /**
   * 诊断
   */
  diagnosis?: string
  /**
   * 建议
   */
  advice?: string
  /**
   * 消息列表
   */
  messages?: {
    id?: number
    /**
     * 咨询id
     */
    consultationId?: number
    /**
     * 消息内容
     */
    senderId?: number
    /**
     * 消息发送类型
     */
    senderType?: 'DOCTOR' | 'PATIENT'
    /**
     * 消息内容
     */
    content?: string
    /**
     * 是否已读
     */
    hasRead?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
  }[]
  /**
   * 最后消息
   */
  lastMessage?: {
    id?: number
    /**
     * 咨询id
     */
    consultationId?: number
    /**
     * 消息内容
     */
    senderId?: number
    /**
     * 消息发送类型
     */
    senderType?: 'DOCTOR' | 'PATIENT'
    /**
     * 消息内容
     */
    content?: string
    /**
     * 是否已读
     */
    hasRead?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
  }
  /**
   * 创建时间
   */
  createdAt?: string
}

/**
 * 接口 查询咨询 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultation`
 */
type PostPatientGetConsultationRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/getConsultation',
    'data',
    string,
    'consultationId',
    false
  >
>

/**
 * 接口 查询咨询 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultation`
 */
const postPatientGetConsultationRequestConfig: PostPatientGetConsultationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/getConsultation',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: ['consultationId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientGetConsultation',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询咨询 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultation`
 */
export const postPatientGetConsultation = /*#__PURE__*/ (
  requestData: IPostPatientGetConsultationReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientGetConsultationRes>(prepare(postPatientGetConsultationRequestConfig, requestData), ...args)
}

postPatientGetConsultation.requestConfig = postPatientGetConsultationRequestConfig

/**
 * 接口 查询咨询 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultation`
 */
export const usePostPatientGetConsultation = /*#__PURE__*/ makeRequestHook<
  IPostPatientGetConsultationReq,
  PostPatientGetConsultationRequestConfig,
  ReturnType<typeof postPatientGetConsultation>
>(postPatientGetConsultation)

/**
 * 接口 新建咨询 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/newConsultation`
 */
export interface IPostPatientNewConsultationReq {
  /**
   * 医生id
   */
  doctorId?: number
  /**
   * 预约id
   */
  appointmentId?: number
  /**
   * 诉求
   */
  chiefComplaint?: string
  /**
   * 用药历史
   */
  medicalHistory?: string
  /**
   * 诊断
   */
  diagnosis?: string
  /**
   * 建议
   */
  advice?: string
}

/**
 * 接口 新建咨询 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/newConsultation`
 */
export interface IPostPatientNewConsultationRes {
  /**
   * 咨询id
   */
  id?: number
  /**
   * 患者id
   */
  patientId?: number
  /**
   * 患者姓名
   */
  patientName?: string
  /**
   * 医生id
   */
  doctorId?: number
  /**
   * 医生姓名
   */
  doctorName?: string
  /**
   * 未读消息数量
   */
  unreadMessageCount?: number
  /**
   * 预约id
   */
  appointmentId?: number
  /**
   * 诉求
   */
  chiefComplaint?: string
  /**
   * 用药历史
   */
  medicalHistory?: string
  /**
   * 诊断
   */
  diagnosis?: string
  /**
   * 建议
   */
  advice?: string
  /**
   * 消息列表
   */
  messages?: {
    id?: number
    /**
     * 咨询id
     */
    consultationId?: number
    /**
     * 消息内容
     */
    senderId?: number
    /**
     * 消息发送类型
     */
    senderType?: 'DOCTOR' | 'PATIENT'
    /**
     * 消息内容
     */
    content?: string
    /**
     * 是否已读
     */
    hasRead?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
  }[]
  /**
   * 最后消息
   */
  lastMessage?: {
    id?: number
    /**
     * 咨询id
     */
    consultationId?: number
    /**
     * 消息内容
     */
    senderId?: number
    /**
     * 消息发送类型
     */
    senderType?: 'DOCTOR' | 'PATIENT'
    /**
     * 消息内容
     */
    content?: string
    /**
     * 是否已读
     */
    hasRead?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
  }
  /**
   * 创建时间
   */
  createdAt?: string
}

/**
 * 接口 新建咨询 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/newConsultation`
 */
type PostPatientNewConsultationRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/newConsultation',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 新建咨询 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/newConsultation`
 */
const postPatientNewConsultationRequestConfig: PostPatientNewConsultationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/newConsultation',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientNewConsultation',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 新建咨询 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/newConsultation`
 */
export const postPatientNewConsultation = /*#__PURE__*/ (
  requestData: IPostPatientNewConsultationReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientNewConsultationRes>(prepare(postPatientNewConsultationRequestConfig, requestData), ...args)
}

postPatientNewConsultation.requestConfig = postPatientNewConsultationRequestConfig

/**
 * 接口 新建咨询 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/newConsultation`
 */
export const usePostPatientNewConsultation = /*#__PURE__*/ makeRequestHook<
  IPostPatientNewConsultationReq,
  PostPatientNewConsultationRequestConfig,
  ReturnType<typeof postPatientNewConsultation>
>(postPatientNewConsultation)

/**
 * 接口 查询咨询分页 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultationPage`
 */
export interface IPostPatientGetConsultationPageReq {
  /**
   * 页码，从 1 开始
   */
  pageNo: number
  /**
   * 每页条数，最大值为 100
   */
  pageSize: number
}

/**
 * 接口 查询咨询分页 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultationPage`
 */
export interface IPostPatientGetConsultationPageRes {
  /**
   * 数据
   */
  list?: {
    /**
     * 咨询id
     */
    id?: number
    /**
     * 患者id
     */
    patientId?: number
    /**
     * 患者姓名
     */
    patientName?: string
    /**
     * 医生id
     */
    doctorId?: number
    /**
     * 医生姓名
     */
    doctorName?: string
    /**
     * 未读消息数量
     */
    unreadMessageCount?: number
    /**
     * 预约id
     */
    appointmentId?: number
    /**
     * 诉求
     */
    chiefComplaint?: string
    /**
     * 用药历史
     */
    medicalHistory?: string
    /**
     * 诊断
     */
    diagnosis?: string
    /**
     * 建议
     */
    advice?: string
    /**
     * 消息列表
     */
    messages?: {
      id?: number
      /**
       * 咨询id
       */
      consultationId?: number
      /**
       * 消息内容
       */
      senderId?: number
      /**
       * 消息发送类型
       */
      senderType?: 'DOCTOR' | 'PATIENT'
      /**
       * 消息内容
       */
      content?: string
      /**
       * 是否已读
       */
      hasRead?: boolean
      /**
       * 创建时间
       */
      createdAt?: string
    }[]
    /**
     * 最后消息
     */
    lastMessage?: {
      id?: number
      /**
       * 咨询id
       */
      consultationId?: number
      /**
       * 消息内容
       */
      senderId?: number
      /**
       * 消息发送类型
       */
      senderType?: 'DOCTOR' | 'PATIENT'
      /**
       * 消息内容
       */
      content?: string
      /**
       * 是否已读
       */
      hasRead?: boolean
      /**
       * 创建时间
       */
      createdAt?: string
    }
    /**
     * 创建时间
     */
    createdAt?: string
  }[]
  /**
   * 总量
   */
  total?: number
  /**
   * 每页多少条
   */
  pageSize?: number
  /**
   * 当前页码
   */
  currentPage?: number
  /**
   * 总页数
   */
  totalPages?: number
}

/**
 * 接口 查询咨询分页 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultationPage`
 */
type PostPatientGetConsultationPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/getConsultationPage',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 查询咨询分页 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultationPage`
 */
const postPatientGetConsultationPageRequestConfig: PostPatientGetConsultationPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/getConsultationPage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientGetConsultationPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询咨询分页 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultationPage`
 */
export const postPatientGetConsultationPage = /*#__PURE__*/ (
  requestData: IPostPatientGetConsultationPageReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientGetConsultationPageRes>(
    prepare(postPatientGetConsultationPageRequestConfig, requestData),
    ...args,
  )
}

postPatientGetConsultationPage.requestConfig = postPatientGetConsultationPageRequestConfig

/**
 * 接口 查询咨询分页 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/getConsultationPage`
 */
export const usePostPatientGetConsultationPage = /*#__PURE__*/ makeRequestHook<
  IPostPatientGetConsultationPageReq,
  PostPatientGetConsultationPageRequestConfig,
  ReturnType<typeof postPatientGetConsultationPage>
>(postPatientGetConsultationPage)

/**
 * 接口 查询详情 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/get`
 */
export interface IGetPatientGetReq {}

/**
 * 接口 查询详情 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/get`
 */
export interface IGetPatientGetRes {
  /**
   * id
   */
  id?: number
  /**
   * 性别
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER'
  /**
   * firstName
   */
  firstName?: string
  /**
   * lastName
   */
  lastName?: string
  /**
   * 国家
   */
  country?: string
  /**
   * nricNumber
   */
  nricNumber?: string
  /**
   * 出生日期
   */
  address?: string
  /**
   * 药物过敏
   */
  drugAllergies?: string[]
}

/**
 * 接口 查询详情 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/get`
 */
type GetPatientGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', 'http://127.0.0.1', '', '/patient/get', 'data', string, string, true>
>

/**
 * 接口 查询详情 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/get`
 */
const getPatientGetRequestConfig: GetPatientGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/get',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPatientGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询详情 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/get`
 */
export const getPatientGet = /*#__PURE__*/ (requestData?: IGetPatientGetReq, ...args: UserRequestRestArgs) => {
  return request<IGetPatientGetRes>(prepare(getPatientGetRequestConfig, requestData), ...args)
}

getPatientGet.requestConfig = getPatientGetRequestConfig

/**
 * 接口 查询详情 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/get`
 */
export const useGetPatientGet = /*#__PURE__*/ makeRequestHook<
  IGetPatientGetReq,
  GetPatientGetRequestConfig,
  ReturnType<typeof getPatientGet>
>(getPatientGet)

/* prettier-ignore-end */
