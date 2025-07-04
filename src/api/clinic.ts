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

const mockUrl_0_4_0_0 = 'http://127.0.0.1:50505/mock/0' as any
const devUrl_0_4_0_0 = 'http://127.0.0.1' as any
const prodUrl_0_4_0_0 = '' as any
const dataKey_0_4_0_0 = 'data' as any

/**
 * 接口 诊所列表查询 的 **请求类型**
 *
 * @分类 诊所
 * @请求头 `POST /clinic/search`
 */
export interface IPostClinicSearchReq {
  /**
   * 页码，从 1 开始
   */
  pageNo: number
  /**
   * 每页条数，最大值为 100
   */
  pageSize: number
  /**
   * 关键词
   */
  keyword?: string
  /**
   * 是否已获资质
   */
  certificated?: boolean
}

/**
 * 接口 诊所列表查询 的 **返回类型**
 *
 * @分类 诊所
 * @请求头 `POST /clinic/search`
 */
export interface IPostClinicSearchRes {
  /**
   * 数据
   */
  list?: {
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
 * 接口 诊所列表查询 的 **请求配置的类型**
 *
 * @分类 诊所
 * @请求头 `POST /clinic/search`
 */
type PostClinicSearchRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/clinic/search',
    'data',
    string,
    string,
    false
  >
>

/**
 * 接口 诊所列表查询 的 **请求配置**
 *
 * @分类 诊所
 * @请求头 `POST /clinic/search`
 */
const postClinicSearchRequestConfig: PostClinicSearchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_4_0_0,
  devUrl: devUrl_0_4_0_0,
  prodUrl: prodUrl_0_4_0_0,
  path: '/clinic/search',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_4_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postClinicSearch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 诊所列表查询 的 **请求函数**
 *
 * @分类 诊所
 * @请求头 `POST /clinic/search`
 */
export const postClinicSearch = /*#__PURE__*/ (requestData: IPostClinicSearchReq, ...args: UserRequestRestArgs) => {
  return request<IPostClinicSearchRes>(prepare(postClinicSearchRequestConfig, requestData), ...args)
}

postClinicSearch.requestConfig = postClinicSearchRequestConfig

/**
 * 接口 诊所列表查询 的 **React Hook**
 *
 * @分类 诊所
 * @请求头 `POST /clinic/search`
 */
export const usePostClinicSearch = /*#__PURE__*/ makeRequestHook<
  IPostClinicSearchReq,
  PostClinicSearchRequestConfig,
  ReturnType<typeof postClinicSearch>
>(postClinicSearch)

/**
 * 接口 根据id查询诊所 的 **请求类型**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/get`
 */
export interface IGetClinicGetReq {
  clinicId: string
}

/**
 * 接口 根据id查询诊所 的 **返回类型**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/get`
 */
export interface IGetClinicGetRes {
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
 * 接口 根据id查询诊所 的 **请求配置的类型**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/get`
 */
type GetClinicGetRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/clinic/get',
    'data',
    string,
    'clinicId',
    false
  >
>

/**
 * 接口 根据id查询诊所 的 **请求配置**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/get`
 */
const getClinicGetRequestConfig: GetClinicGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_4_0_0,
  devUrl: devUrl_0_4_0_0,
  prodUrl: prodUrl_0_4_0_0,
  path: '/clinic/get',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_4_0_0,
  paramNames: [],
  queryNames: ['clinicId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getClinicGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 根据id查询诊所 的 **请求函数**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/get`
 */
export const getClinicGet = /*#__PURE__*/ (requestData: IGetClinicGetReq, ...args: UserRequestRestArgs) => {
  return request<IGetClinicGetRes>(prepare(getClinicGetRequestConfig, requestData), ...args)
}

getClinicGet.requestConfig = getClinicGetRequestConfig

/**
 * 接口 根据id查询诊所 的 **React Hook**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/get`
 */
export const useGetClinicGet = /*#__PURE__*/ makeRequestHook<
  IGetClinicGetReq,
  GetClinicGetRequestConfig,
  ReturnType<typeof getClinicGet>
>(getClinicGet)

/**
 * 接口 查询预约 的 **请求类型**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/getAppointments`
 */
export interface IGetClinicGetAppointmentsReq {
  clinicId: string
}

/**
 * 接口 查询预约 的 **返回类型**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/getAppointments`
 */
export type IGetClinicGetAppointmentsRes = {
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
 * @分类 诊所
 * @请求头 `GET /clinic/getAppointments`
 */
type GetClinicGetAppointmentsRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    'http://127.0.0.1',
    '',
    '/clinic/getAppointments',
    'data',
    string,
    'clinicId',
    false
  >
>

/**
 * 接口 查询预约 的 **请求配置**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/getAppointments`
 */
const getClinicGetAppointmentsRequestConfig: GetClinicGetAppointmentsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_4_0_0,
  devUrl: devUrl_0_4_0_0,
  prodUrl: prodUrl_0_4_0_0,
  path: '/clinic/getAppointments',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_4_0_0,
  paramNames: [],
  queryNames: ['clinicId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getClinicGetAppointments',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 查询预约 的 **请求函数**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/getAppointments`
 */
export const getClinicGetAppointments = /*#__PURE__*/ (
  requestData: IGetClinicGetAppointmentsReq,
  ...args: UserRequestRestArgs
) => {
  return request<IGetClinicGetAppointmentsRes>(prepare(getClinicGetAppointmentsRequestConfig, requestData), ...args)
}

getClinicGetAppointments.requestConfig = getClinicGetAppointmentsRequestConfig

/**
 * 接口 查询预约 的 **React Hook**
 *
 * @分类 诊所
 * @请求头 `GET /clinic/getAppointments`
 */
export const useGetClinicGetAppointments = /*#__PURE__*/ makeRequestHook<
  IGetClinicGetAppointmentsReq,
  GetClinicGetAppointmentsRequestConfig,
  ReturnType<typeof getClinicGetAppointments>
>(getClinicGetAppointments)

/* prettier-ignore-end */
