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

const mockUrl_0_2_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_2_0_0 = 'http://127.0.0.1' as any
const prodUrl_0_2_0_0 = '' as any
const dataKey_0_2_0_0 = 'data' as any

/**
 * 接口 修改详情 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/update`
 */
export interface IPostDoctorUpdateReq {
  /**
   * id
   */
  id?: number
  /**
   * 专业、特长
   */
  specialty?: string[]
  /**
   * 职称
   */
  title?: string
  /**
   * 介绍
   */
  introduction?: string
  firstName?: string
  lastName?: string
  /**
   * 生日
   */
  birthday?: string
  /**
   * 国家
   */
  country?: string
  /**
   * 性别
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER'
  /**
   * 身份类型
   */
  identificationType?: number
  /**
   * 身份号码
   */
  identificationNumber?: string
  /**
   * 有效期
   */
  validUpto?: string
  /**
   * 类别
   */
  category?: string
  /**
   * 头像
   */
  avatarUrl?: string
  /**
   * 可用时间
   */
  availableDays?: number[]
  /**
   * 可用时间段
   */
  availableSlots?: number[]
}

/**
 * 接口 修改详情 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/update`
 */
export type IPostDoctorUpdateRes = boolean

/**
 * 接口 修改详情 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/update`
 */
type PostDoctorUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/update',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 修改详情 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/update`
 */
const postDoctorUpdateRequestConfig: PostDoctorUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 修改详情 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/update`
 */
export const postDoctorUpdate = /*#__PURE__*/ (requestData: IPostDoctorUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IPostDoctorUpdateRes>(prepare(postDoctorUpdateRequestConfig, requestData), ...args)
}

postDoctorUpdate.requestConfig = postDoctorUpdateRequestConfig

/**
 * 接口 修改详情 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/update`
 */
export const usePostDoctorUpdate = /*#__PURE__*/ makeRequestHook<
  IPostDoctorUpdateReq,
  PostDoctorUpdateRequestConfig,
  ReturnType<typeof postDoctorUpdate>
>(postDoctorUpdate)

/**
 * 接口 自动调度排班 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/schedule`
 */
export interface IPostDoctorScheduleReq {
  endDate: string
}

/**
 * 接口 自动调度排班 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/schedule`
 */
export type IPostDoctorScheduleRes = boolean

/**
 * 接口 自动调度排班 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/schedule`
 */
type PostDoctorScheduleRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/schedule',
    'data',
    string,
    'endDate',
    false
  >
>

/**
 * 接口 自动调度排班 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/schedule`
 */
const postDoctorScheduleRequestConfig: PostDoctorScheduleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/schedule',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: ['endDate'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorSchedule',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 自动调度排班 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/schedule`
 */
export const postDoctorSchedule = /*#__PURE__*/ (requestData: IPostDoctorScheduleReq, ...args: UserRequestRestArgs) => {
  return request<IPostDoctorScheduleRes>(prepare(postDoctorScheduleRequestConfig, requestData), ...args)
}

postDoctorSchedule.requestConfig = postDoctorScheduleRequestConfig

/**
 * 接口 自动调度排班 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/schedule`
 */
export const usePostDoctorSchedule = /*#__PURE__*/ makeRequestHook<
  IPostDoctorScheduleReq,
  PostDoctorScheduleRequestConfig,
  ReturnType<typeof postDoctorSchedule>
>(postDoctorSchedule)

/**
 * 接口 发送消息 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/replyMessage`
 */
export interface IPostDoctorReplyMessageReq {
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
 * @分类 医生中心
 * @请求头 `POST /doctor/replyMessage`
 */
export type IPostDoctorReplyMessageRes = boolean

/**
 * 接口 发送消息 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/replyMessage`
 */
type PostDoctorReplyMessageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/replyMessage',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 发送消息 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/replyMessage`
 */
const postDoctorReplyMessageRequestConfig: PostDoctorReplyMessageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/replyMessage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorReplyMessage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 发送消息 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/replyMessage`
 */
export const postDoctorReplyMessage = /*#__PURE__*/ (
  requestData: IPostDoctorReplyMessageReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostDoctorReplyMessageRes>(prepare(postDoctorReplyMessageRequestConfig, requestData), ...args)
}

postDoctorReplyMessage.requestConfig = postDoctorReplyMessageRequestConfig

/**
 * 接口 发送消息 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/replyMessage`
 */
export const usePostDoctorReplyMessage = /*#__PURE__*/ makeRequestHook<
  IPostDoctorReplyMessageReq,
  PostDoctorReplyMessageRequestConfig,
  ReturnType<typeof postDoctorReplyMessage>
>(postDoctorReplyMessage)

/**
 * 接口 注册 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/register`
 */
export interface IPostDoctorRegisterReq {
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
   * 生日
   */
  birthday?: string
  /**
   * 国家
   */
  country?: string
  /**
   * 性别
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER'
  /**
   * 身份类型
   */
  identificationType?: number
  /**
   * 身份号码
   */
  identificationNumber?: string
  /**
   * 有效期
   */
  validUpto?: string
}

/**
 * 接口 注册 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/register`
 */
export type IPostDoctorRegisterRes = boolean

/**
 * 接口 注册 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/register`
 */
type PostDoctorRegisterRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/register',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 注册 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/register`
 */
const postDoctorRegisterRequestConfig: PostDoctorRegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/register',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorRegister',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 注册 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/register`
 */
export const postDoctorRegister = /*#__PURE__*/ (requestData: IPostDoctorRegisterReq, ...args: UserRequestRestArgs) => {
  return request<IPostDoctorRegisterRes>(prepare(postDoctorRegisterRequestConfig, requestData), ...args)
}

postDoctorRegister.requestConfig = postDoctorRegisterRequestConfig

/**
 * 接口 注册 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/register`
 */
export const usePostDoctorRegister = /*#__PURE__*/ makeRequestHook<
  IPostDoctorRegisterReq,
  PostDoctorRegisterRequestConfig,
  ReturnType<typeof postDoctorRegister>
>(postDoctorRegister)

/**
 * 接口 读取消息 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/readMessage`
 */
export interface IPostDoctorReadMessageReq {
  messageId: string
}

/**
 * 接口 读取消息 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/readMessage`
 */
export type IPostDoctorReadMessageRes = boolean

/**
 * 接口 读取消息 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/readMessage`
 */
type PostDoctorReadMessageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/readMessage',
    'data',
    string,
    'messageId',
    false
  >
>

/**
 * 接口 读取消息 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/readMessage`
 */
const postDoctorReadMessageRequestConfig: PostDoctorReadMessageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/readMessage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: ['messageId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorReadMessage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 读取消息 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/readMessage`
 */
export const postDoctorReadMessage = /*#__PURE__*/ (
  requestData: IPostDoctorReadMessageReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostDoctorReadMessageRes>(prepare(postDoctorReadMessageRequestConfig, requestData), ...args)
}

postDoctorReadMessage.requestConfig = postDoctorReadMessageRequestConfig

/**
 * 接口 读取消息 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/readMessage`
 */
export const usePostDoctorReadMessage = /*#__PURE__*/ makeRequestHook<
  IPostDoctorReadMessageReq,
  PostDoctorReadMessageRequestConfig,
  ReturnType<typeof postDoctorReadMessage>
>(postDoctorReadMessage)

/**
 * 接口 查询咨询 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultation`
 */
export interface IPostDoctorGetConsultationReq {
  consultationId: string
}

/**
 * 接口 查询咨询 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultation`
 */
export interface IPostDoctorGetConsultationRes {
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
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultation`
 */
type PostDoctorGetConsultationRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/getConsultation',
    'data',
    string,
    'consultationId',
    false
  >
>

/**
 * 接口 查询咨询 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultation`
 */
const postDoctorGetConsultationRequestConfig: PostDoctorGetConsultationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/getConsultation',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: ['consultationId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorGetConsultation',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询咨询 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultation`
 */
export const postDoctorGetConsultation = /*#__PURE__*/ (
  requestData: IPostDoctorGetConsultationReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostDoctorGetConsultationRes>(prepare(postDoctorGetConsultationRequestConfig, requestData), ...args)
}

postDoctorGetConsultation.requestConfig = postDoctorGetConsultationRequestConfig

/**
 * 接口 查询咨询 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultation`
 */
export const usePostDoctorGetConsultation = /*#__PURE__*/ makeRequestHook<
  IPostDoctorGetConsultationReq,
  PostDoctorGetConsultationRequestConfig,
  ReturnType<typeof postDoctorGetConsultation>
>(postDoctorGetConsultation)

/**
 * 接口 查询咨询分页 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultationPage`
 */
export interface IPostDoctorGetConsultationPageReq {
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
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultationPage`
 */
export interface IPostDoctorGetConsultationPageRes {
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
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultationPage`
 */
type PostDoctorGetConsultationPageRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/getConsultationPage',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 查询咨询分页 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultationPage`
 */
const postDoctorGetConsultationPageRequestConfig: PostDoctorGetConsultationPageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/getConsultationPage',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorGetConsultationPage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询咨询分页 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultationPage`
 */
export const postDoctorGetConsultationPage = /*#__PURE__*/ (
  requestData: IPostDoctorGetConsultationPageReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostDoctorGetConsultationPageRes>(
    prepare(postDoctorGetConsultationPageRequestConfig, requestData),
    ...args,
  )
}

postDoctorGetConsultationPage.requestConfig = postDoctorGetConsultationPageRequestConfig

/**
 * 接口 查询咨询分页 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/getConsultationPage`
 */
export const usePostDoctorGetConsultationPage = /*#__PURE__*/ makeRequestHook<
  IPostDoctorGetConsultationPageReq,
  PostDoctorGetConsultationPageRequestConfig,
  ReturnType<typeof postDoctorGetConsultationPage>
>(postDoctorGetConsultationPage)

/**
 * 接口 取消排班 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/cancelSchedule`
 */
export interface IPostDoctorCancelScheduleReq {
  scheduleId: string
}

/**
 * 接口 取消排班 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/cancelSchedule`
 */
export type IPostDoctorCancelScheduleRes = boolean

/**
 * 接口 取消排班 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/cancelSchedule`
 */
type PostDoctorCancelScheduleRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/cancelSchedule',
    'data',
    string,
    'scheduleId',
    false
  >
>

/**
 * 接口 取消排班 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/cancelSchedule`
 */
const postDoctorCancelScheduleRequestConfig: PostDoctorCancelScheduleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/cancelSchedule',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: ['scheduleId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorCancelSchedule',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 取消排班 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/cancelSchedule`
 */
export const postDoctorCancelSchedule = /*#__PURE__*/ (
  requestData: IPostDoctorCancelScheduleReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostDoctorCancelScheduleRes>(prepare(postDoctorCancelScheduleRequestConfig, requestData), ...args)
}

postDoctorCancelSchedule.requestConfig = postDoctorCancelScheduleRequestConfig

/**
 * 接口 取消排班 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/cancelSchedule`
 */
export const usePostDoctorCancelSchedule = /*#__PURE__*/ makeRequestHook<
  IPostDoctorCancelScheduleReq,
  PostDoctorCancelScheduleRequestConfig,
  ReturnType<typeof postDoctorCancelSchedule>
>(postDoctorCancelSchedule)

/**
 * 接口 批量取消排班 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/batchCancelSchedule`
 */
export interface IPostDoctorBatchCancelScheduleReq {
  /**
   * 排班ID列表
   */
  scheduleIds?: number[]
}

/**
 * 接口 批量取消排班 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/batchCancelSchedule`
 */
export type IPostDoctorBatchCancelScheduleRes = boolean

/**
 * 接口 批量取消排班 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/batchCancelSchedule`
 */
type PostDoctorBatchCancelScheduleRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/batchCancelSchedule',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 批量取消排班 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/batchCancelSchedule`
 */
const postDoctorBatchCancelScheduleRequestConfig: PostDoctorBatchCancelScheduleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/batchCancelSchedule',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorBatchCancelSchedule',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 批量取消排班 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/batchCancelSchedule`
 */
export const postDoctorBatchCancelSchedule = /*#__PURE__*/ (
  requestData: IPostDoctorBatchCancelScheduleReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostDoctorBatchCancelScheduleRes>(
    prepare(postDoctorBatchCancelScheduleRequestConfig, requestData),
    ...args,
  )
}

postDoctorBatchCancelSchedule.requestConfig = postDoctorBatchCancelScheduleRequestConfig

/**
 * 接口 批量取消排班 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/batchCancelSchedule`
 */
export const usePostDoctorBatchCancelSchedule = /*#__PURE__*/ makeRequestHook<
  IPostDoctorBatchCancelScheduleReq,
  PostDoctorBatchCancelScheduleRequestConfig,
  ReturnType<typeof postDoctorBatchCancelSchedule>
>(postDoctorBatchCancelSchedule)

/**
 * 接口 当天增加排班 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/addSchedule`
 */
export interface IPostDoctorAddScheduleReq {
  /**
   * 时间的slots列表
   */
  slots?: number[]
  /**
   * 排班日期
   */
  date?: string
}

/**
 * 接口 当天增加排班 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/addSchedule`
 */
export type IPostDoctorAddScheduleRes = boolean

/**
 * 接口 当天增加排班 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/addSchedule`
 */
type PostDoctorAddScheduleRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/addSchedule',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 当天增加排班 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/addSchedule`
 */
const postDoctorAddScheduleRequestConfig: PostDoctorAddScheduleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/addSchedule',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postDoctorAddSchedule',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 当天增加排班 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/addSchedule`
 */
export const postDoctorAddSchedule = /*#__PURE__*/ (
  requestData: IPostDoctorAddScheduleReq,
  ...args: UserRequestRestArgs
) => {
  return request<IPostDoctorAddScheduleRes>(prepare(postDoctorAddScheduleRequestConfig, requestData), ...args)
}

postDoctorAddSchedule.requestConfig = postDoctorAddScheduleRequestConfig

/**
 * 接口 当天增加排班 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `POST /doctor/addSchedule`
 */
export const usePostDoctorAddSchedule = /*#__PURE__*/ makeRequestHook<
  IPostDoctorAddScheduleReq,
  PostDoctorAddScheduleRequestConfig,
  ReturnType<typeof postDoctorAddSchedule>
>(postDoctorAddSchedule)

/**
 * 接口 查询详情 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/get`
 */
export interface IGetDoctorGetReq {}

/**
 * 接口 查询详情 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/get`
 */
export interface IGetDoctorGetRes {
  /**
   * id
   */
  id?: number
  /**
   * userId
   */
  userId?: number
  /**
   * 专业、特长
   */
  specialty?: string[]
  /**
   * 职称
   */
  title?: string
  /**
   * 介绍
   */
  introduction?: string
  /**
   * 咨询费
   */
  consultationFee?: number
  /**
   * 状态
   */
  status?: string
  firstName?: string
  lastName?: string
  /**
   * 生日
   */
  birthday?: string
  /**
   * 国家
   */
  country?: string
  /**
   * 性别
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER'
  /**
   * 身份类型
   */
  identificationType?: number
  /**
   * 身份号码
   */
  identificationNumber?: string
  /**
   * 有效期
   */
  validUpto?: string
  /**
   * 类别
   */
  category?: string
  /**
   * 头像
   */
  avatarUrl?: string
  /**
   * 可用时间
   */
  availableDays?: number[]
  /**
   * 可用时间段
   */
  availableSlots?: number[]
  /**
   * 时间段可预约数
   */
  slotNumbers?: number
}

/**
 * 接口 查询详情 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/get`
 */
type GetDoctorGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', 'http://127.0.0.1', '', '/doctor/get', 'data', string, string, true>
>

/**
 * 接口 查询详情 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/get`
 */
const getDoctorGetRequestConfig: GetDoctorGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/get',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDoctorGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询详情 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/get`
 */
export const getDoctorGet = /*#__PURE__*/ (requestData?: IGetDoctorGetReq, ...args: UserRequestRestArgs) => {
  return request<IGetDoctorGetRes>(prepare(getDoctorGetRequestConfig, requestData), ...args)
}

getDoctorGet.requestConfig = getDoctorGetRequestConfig

/**
 * 接口 查询详情 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/get`
 */
export const useGetDoctorGet = /*#__PURE__*/ makeRequestHook<
  IGetDoctorGetReq,
  GetDoctorGetRequestConfig,
  ReturnType<typeof getDoctorGet>
>(getDoctorGet)

/**
 * 接口 获取当月排班信息 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByMonth`
 */
export interface IGetDoctorGetSchedulesByMonthReq {
  doctorId: string
  month: string
}

/**
 * 接口 获取当月排班信息 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByMonth`
 */
export type IGetDoctorGetSchedulesByMonthRes = {
  /**
   * 排班ID
   */
  id?: number
  /**
   * 医生ID
   */
  doctorId?: number
  /**
   * 排班日期
   */
  scheduleDate?: string
  /**
   * 时间段，每半个小时为一个slot，00:00~00:30为0，00:30~01:00为1，以此类推
   */
  timeSlot?: number
  /**
   * 最大预约数
   */
  maxAppointments?: number
  /**
   * 剩余预约数
   */
  availableAppointments?: number
  /**
   * 排班状态
   */
  status?: 'AVAILABLE' | 'FULL' | 'CANCELLED'
}[]

/**
 * 接口 获取当月排班信息 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByMonth`
 */
type GetDoctorGetSchedulesByMonthRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/getSchedulesByMonth',
    'data',
    string,
    'doctorId' | 'month',
    false
  >
>

/**
 * 接口 获取当月排班信息 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByMonth`
 */
const getDoctorGetSchedulesByMonthRequestConfig: GetDoctorGetSchedulesByMonthRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/getSchedulesByMonth',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: ['doctorId', 'month'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDoctorGetSchedulesByMonth',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取当月排班信息 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByMonth`
 */
export const getDoctorGetSchedulesByMonth = /*#__PURE__*/ (
  requestData: IGetDoctorGetSchedulesByMonthReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetDoctorGetSchedulesByMonthRes>(
    prepare(getDoctorGetSchedulesByMonthRequestConfig, requestData),
    ...args,
  )
}

getDoctorGetSchedulesByMonth.requestConfig = getDoctorGetSchedulesByMonthRequestConfig

/**
 * 接口 获取当月排班信息 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByMonth`
 */
export const useGetDoctorGetSchedulesByMonth = /*#__PURE__*/ makeRequestHook<
  IGetDoctorGetSchedulesByMonthReq,
  GetDoctorGetSchedulesByMonthRequestConfig,
  ReturnType<typeof getDoctorGetSchedulesByMonth>
>(getDoctorGetSchedulesByMonth)

/**
 * 接口 获取当天排班信息 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByDate`
 */
export interface IGetDoctorGetSchedulesByDateReq {
  doctorId: string
  date: string
}

/**
 * 接口 获取当天排班信息 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByDate`
 */
export type IGetDoctorGetSchedulesByDateRes = {
  /**
   * 排班ID
   */
  id?: number
  /**
   * 医生ID
   */
  doctorId?: number
  /**
   * 排班日期
   */
  scheduleDate?: string
  /**
   * 时间段，每半个小时为一个slot，00:00~00:30为0，00:30~01:00为1，以此类推
   */
  timeSlot?: number
  /**
   * 最大预约数
   */
  maxAppointments?: number
  /**
   * 剩余预约数
   */
  availableAppointments?: number
  /**
   * 排班状态
   */
  status?: 'AVAILABLE' | 'FULL' | 'CANCELLED'
}[]

/**
 * 接口 获取当天排班信息 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByDate`
 */
type GetDoctorGetSchedulesByDateRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/getSchedulesByDate',
    'data',
    string,
    'doctorId' | 'date',
    false
  >
>

/**
 * 接口 获取当天排班信息 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByDate`
 */
const getDoctorGetSchedulesByDateRequestConfig: GetDoctorGetSchedulesByDateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/getSchedulesByDate',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: ['doctorId', 'date'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDoctorGetSchedulesByDate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 获取当天排班信息 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByDate`
 */
export const getDoctorGetSchedulesByDate = /*#__PURE__*/ (
  requestData: IGetDoctorGetSchedulesByDateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetDoctorGetSchedulesByDateRes>(
    prepare(getDoctorGetSchedulesByDateRequestConfig, requestData),
    ...args,
  )
}

getDoctorGetSchedulesByDate.requestConfig = getDoctorGetSchedulesByDateRequestConfig

/**
 * 接口 获取当天排班信息 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getSchedulesByDate`
 */
export const useGetDoctorGetSchedulesByDate = /*#__PURE__*/ makeRequestHook<
  IGetDoctorGetSchedulesByDateReq,
  GetDoctorGetSchedulesByDateRequestConfig,
  ReturnType<typeof getDoctorGetSchedulesByDate>
>(getDoctorGetSchedulesByDate)

/**
 * 接口 查询详情 的 **请求类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getById`
 */
export interface IGetDoctorGetByIdReq {
  doctorId: string
}

/**
 * 接口 查询详情 的 **返回类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getById`
 */
export interface IGetDoctorGetByIdRes {
  /**
   * id
   */
  id?: number
  /**
   * userId
   */
  userId?: number
  /**
   * 专业、特长
   */
  specialty?: string[]
  /**
   * 职称
   */
  title?: string
  /**
   * 介绍
   */
  introduction?: string
  /**
   * 咨询费
   */
  consultationFee?: number
  /**
   * 状态
   */
  status?: string
  firstName?: string
  lastName?: string
  /**
   * 生日
   */
  birthday?: string
  /**
   * 国家
   */
  country?: string
  /**
   * 性别
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER'
  /**
   * 身份类型
   */
  identificationType?: number
  /**
   * 身份号码
   */
  identificationNumber?: string
  /**
   * 有效期
   */
  validUpto?: string
  /**
   * 类别
   */
  category?: string
  /**
   * 头像
   */
  avatarUrl?: string
  /**
   * 可用时间
   */
  availableDays?: number[]
  /**
   * 可用时间段
   */
  availableSlots?: number[]
  /**
   * 时间段可预约数
   */
  slotNumbers?: number
}

/**
 * 接口 查询详情 的 **请求配置的类型**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getById`
 */
type GetDoctorGetByIdRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/doctor/getById',
    'data',
    string,
    'doctorId',
    false
  >
>

/**
 * 接口 查询详情 的 **请求配置**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getById`
 */
const getDoctorGetByIdRequestConfig: GetDoctorGetByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_2_0_0,
  devUrl: devUrl_0_2_0_0,
  prodUrl: prodUrl_0_2_0_0,
  path: '/doctor/getById',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_2_0_0,
  paramNames: [],
  queryNames: ['doctorId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDoctorGetById',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询详情 的 **请求函数**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getById`
 */
export const getDoctorGetById = /*#__PURE__*/ (requestData: IGetDoctorGetByIdReq, ...args: UserRequestRestArgs) => {
  return request<IGetDoctorGetByIdRes>(prepare(getDoctorGetByIdRequestConfig, requestData), ...args)
}

getDoctorGetById.requestConfig = getDoctorGetByIdRequestConfig

/**
 * 接口 查询详情 的 **React Hook**
 *
 * @分类 医生中心
 * @请求头 `GET /doctor/getById`
 */
export const useGetDoctorGetById = /*#__PURE__*/ makeRequestHook<
  IGetDoctorGetByIdReq,
  GetDoctorGetByIdRequestConfig,
  ReturnType<typeof getDoctorGetById>
>(getDoctorGetById)

/* prettier-ignore-end */
