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
   * 联系地址
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
  /**
   * 性别
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER'
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
   * email
   */
  email?: string
  /**
   * 手机
   */
  phone?: string
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

/**
 * 接口 预约 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/makeAppointment`
 */
export interface IPostPatientMakeAppointmentReq {
  /**
   * 医生id,没有先不传
   */
  doctorId?: number
  /**
   * main_health_concerns
   */
  mainHealthConcerns?: string
  /**
   * 所属 诊所 id
   */
  clinicId?: number
  /**
   * 预约日期, yyyy-MM-dd
   */
  appointmentDate?: string
  /**
   * 预约时间段
   */
  slot?: number
  /**
   * 用药历史
   */
  drugAllergies?: string[]
  /**
   * 联系方式
   */
  contactDetails?: string
  /**
   * 是否正在用药
   */
  takingMedication?: boolean
  /**
   * 用药详情
   */
  medicationDetail?: string
}

/**
 * 接口 预约 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/makeAppointment`
 */
export type IPostPatientMakeAppointmentRes = boolean

/**
 * 接口 预约 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/makeAppointment`
 */
type PostPatientMakeAppointmentRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/makeAppointment',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 预约 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/makeAppointment`
 */
const postPatientMakeAppointmentRequestConfig: PostPatientMakeAppointmentRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/makeAppointment',
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
  requestFunctionName: 'postPatientMakeAppointment',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 预约 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/makeAppointment`
 */
export const postPatientMakeAppointment = /*#__PURE__*/ (
  requestData: IPostPatientMakeAppointmentReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientMakeAppointmentRes>(prepare(postPatientMakeAppointmentRequestConfig, requestData), ...args)
}

postPatientMakeAppointment.requestConfig = postPatientMakeAppointmentRequestConfig

/**
 * 接口 预约 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/makeAppointment`
 */
export const usePostPatientMakeAppointment = /*#__PURE__*/ makeRequestHook<
  IPostPatientMakeAppointmentReq,
  PostPatientMakeAppointmentRequestConfig,
  ReturnType<typeof postPatientMakeAppointment>
>(postPatientMakeAppointment)

/**
 * 接口 取消预约 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/cancelAppointment`
 */
export interface IPostPatientCancelAppointmentReq {
  appointmentId: string
}

/**
 * 接口 取消预约 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/cancelAppointment`
 */
export type IPostPatientCancelAppointmentRes = boolean

/**
 * 接口 取消预约 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/cancelAppointment`
 */
type PostPatientCancelAppointmentRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/cancelAppointment',
    'data',
    string,
    'appointmentId',
    false
  >
>

/**
 * 接口 取消预约 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/cancelAppointment`
 */
const postPatientCancelAppointmentRequestConfig: PostPatientCancelAppointmentRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/cancelAppointment',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: ['appointmentId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postPatientCancelAppointment',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 取消预约 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/cancelAppointment`
 */
export const postPatientCancelAppointment = /*#__PURE__*/ (
  requestData: IPostPatientCancelAppointmentReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostPatientCancelAppointmentRes>(
    prepare(postPatientCancelAppointmentRequestConfig, requestData),
    ...args,
  )
}

postPatientCancelAppointment.requestConfig = postPatientCancelAppointmentRequestConfig

/**
 * 接口 取消预约 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `POST /patient/cancelAppointment`
 */
export const usePostPatientCancelAppointment = /*#__PURE__*/ makeRequestHook<
  IPostPatientCancelAppointmentReq,
  PostPatientCancelAppointmentRequestConfig,
  ReturnType<typeof postPatientCancelAppointment>
>(postPatientCancelAppointment)

/**
 * 接口 查询时间段状态 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getSlotsStatus`
 */
export interface IGetPatientGetSlotsStatusReq {
  doctorId: string
  clinicId: string
  /**
   * yyyy-MM-dd
   */
  appointmentDate: string
}

/**
 * 接口 查询时间段状态 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getSlotsStatus`
 */
export type IGetPatientGetSlotsStatusRes = {
  /**
   * 日期
   */
  date?: string
  /**
   * 时间段
   */
  slot?: number
  /**
   * 剩余数量
   */
  remain?: number
  /**
   * 最大数量
   */
  max?: number
  /**
   * 当前数量
   */
  current?: number
}[]

/**
 * 接口 查询时间段状态 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getSlotsStatus`
 */
type GetPatientGetSlotsStatusRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/getSlotsStatus',
    'data',
    string,
    'doctorId' | 'clinicId' | 'appointmentDate',
    false
  >
>

/**
 * 接口 查询时间段状态 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getSlotsStatus`
 */
const getPatientGetSlotsStatusRequestConfig: GetPatientGetSlotsStatusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/getSlotsStatus',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_1_0_0,
  paramNames: [],
  queryNames: ['doctorId', 'clinicId', 'appointmentDate'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getPatientGetSlotsStatus',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询时间段状态 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getSlotsStatus`
 */
export const getPatientGetSlotsStatus = /*#__PURE__*/ (
  requestData: IGetPatientGetSlotsStatusReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetPatientGetSlotsStatusRes>(prepare(getPatientGetSlotsStatusRequestConfig, requestData), ...args)
}

getPatientGetSlotsStatus.requestConfig = getPatientGetSlotsStatusRequestConfig

/**
 * 接口 查询时间段状态 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getSlotsStatus`
 */
export const useGetPatientGetSlotsStatus = /*#__PURE__*/ makeRequestHook<
  IGetPatientGetSlotsStatusReq,
  GetPatientGetSlotsStatusRequestConfig,
  ReturnType<typeof getPatientGetSlotsStatus>
>(getPatientGetSlotsStatus)

/**
 * 接口 查询预约 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getAppointments`
 */
export interface IGetPatientGetAppointmentsReq {}

/**
 * 接口 查询预约 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getAppointments`
 */
export type IGetPatientGetAppointmentsRes = {
  /**
   * 预约id
   */
  id?: number
  /**
   * 患者id
   */
  patientId?: number
  /**
   * Patient详情
   */
  patient?: {
    /**
     * id
     */
    id?: number
    /**
     * 性别
     */
    gender?: 'MALE' | 'FEMALE' | 'OTHER'
    /**
     * email
     */
    email?: string
    /**
     * 手机
     */
    phone?: string
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
   * 医生id,没有先不传
   */
  doctorId?: number
  /**
   * 症状描述
   */
  mainHealthConcerns?: string
  /**
   * 所属 诊所 id
   */
  clinicId?: number
  /**
   * 数据
   */
  clinic?: {
    /**
     * 诊所ID
     */
    id?: number
    /**
     * 英文名称
     */
    enName?: string
    /**
     * 中文名称
     */
    zhName?: string
    /**
     * 介绍
     */
    introduction?: string
    /**
     * 街道名称
     */
    streetName?: string
    /**
     * 国家代码
     */
    countryCode?: string
    /**
     * 手机号码
     */
    phone?: string
    /**
     * 邮箱
     */
    email?: string
    /**
     * 纬度
     */
    latitude?: number
    /**
     * 经度
     */
    longitude?: number
    /**
     * 机构类型
     */
    clinicType?: string
    /**
     * 官网
     */
    website?: string
    /**
     * 卫生部注册号
     */
    mohRegistration?: string
    /**
     * 医疗机构代码
     */
    hciCode?: string
    /**
     * 营业时间
     */
    openingHours?: {
      /**
       * Monday,...Friday, Public holiday
       */
      dayType?: string[]
      /**
       * 是否连续，为true， dayType=[Monday, Friday]代表Monday~Friday, 为false， dayType=[Sunday, Public holiday]Sunday, Public holiday
       */
      continuous?: boolean
      /**
       * 时间段，格式为HH:mm-HH:mm, 如果timeStyle=false,也可以是Closed，Teleconsult
       */
      timeDuration?: string[]
      /**
       * 时间段格式，为true，timeDuration=[09:00-18:00], 为false，timeDuration=[Closed, Teleconsult]
       */
      timeStyle?: boolean
    }[]
    /**
     * 是否可预订/可用
     */
    enable?: boolean
    /**
     * 分组
     */
    grp?: string
    /**
     * certificated
     */
    certificated?: boolean
  }
  /**
   * 预约日期
   */
  appointmentDate?: string
  /**
   * 预约号
   */
  appointmentNumber?: string
  /**
   * 预约状态
   */
  status?: string
  /**
   * 预约时间段
   */
  slot?: number
  /**
   * 用药历史
   */
  drugAllergies?: string[]
  /**
   * 联系方式
   */
  contactDetails?: string
  /**
   * 是否正在用药
   */
  takingMedication?: boolean
  /**
   * 用药详情
   */
  medicationDetail?: string
}[]

/**
 * 接口 查询预约 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getAppointments`
 */
type GetPatientGetAppointmentsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/getAppointments',
    'data',
    string,
    string,
    true
  >
>

/**
 * 接口 查询预约 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getAppointments`
 */
const getPatientGetAppointmentsRequestConfig: GetPatientGetAppointmentsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/getAppointments',
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
  requestFunctionName: 'getPatientGetAppointments',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询预约 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getAppointments`
 */
export const getPatientGetAppointments = /*#__PURE__*/ (
  requestData?: IGetPatientGetAppointmentsReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetPatientGetAppointmentsRes>(prepare(getPatientGetAppointmentsRequestConfig, requestData), ...args)
}

getPatientGetAppointments.requestConfig = getPatientGetAppointmentsRequestConfig

/**
 * 接口 查询预约 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/getAppointments`
 */
export const useGetPatientGetAppointments = /*#__PURE__*/ makeRequestHook<
  IGetPatientGetAppointmentsReq,
  GetPatientGetAppointmentsRequestConfig,
  ReturnType<typeof getPatientGetAppointments>
>(getPatientGetAppointments)

/**
 * 接口 删除用户 的 **请求类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/delete`
 */
export interface IGetPatientDeleteReq {}

/**
 * 接口 删除用户 的 **返回类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/delete`
 */
export type IGetPatientDeleteRes = boolean

/**
 * 接口 删除用户 的 **请求配置的类型**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/delete`
 */
type GetPatientDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/patient/delete',
    'data',
    string,
    string,
    true
  >
>

/**
 * 接口 删除用户 的 **请求配置**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/delete`
 */
const getPatientDeleteRequestConfig: GetPatientDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_1_0_0,
  devUrl: devUrl_0_1_0_0,
  prodUrl: prodUrl_0_1_0_0,
  path: '/patient/delete',
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
  requestFunctionName: 'getPatientDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 删除用户 的 **请求函数**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/delete`
 */
export const getPatientDelete = /*#__PURE__*/ (requestData?: IGetPatientDeleteReq, ...args: UserRequestRestArgs) => {
  return request<IGetPatientDeleteRes>(prepare(getPatientDeleteRequestConfig, requestData), ...args)
}

getPatientDelete.requestConfig = getPatientDeleteRequestConfig

/**
 * 接口 删除用户 的 **React Hook**
 *
 * @分类 患者中心
 * @请求头 `GET /patient/delete`
 */
export const useGetPatientDelete = /*#__PURE__*/ makeRequestHook<
  IGetPatientDeleteReq,
  GetPatientDeleteRequestConfig,
  ReturnType<typeof getPatientDelete>
>(getPatientDelete)

/* prettier-ignore-end */
