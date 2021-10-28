import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios'

// 请求参数类型约定
export type HttpParams = {
  options?: {
    authApi?: boolean // 是否私有API(即登陆之后才可以访问的api
    globalLoading?: boolean
  }
} & AxiosRequestConfig

// 获取config方法的类型约定
type ConfigParams = {
  method?: Method
  url?: string
  data?: unknown
  params?: unknown
}

// api url
let VITE_APP_API = ''
// app secret
let VITE_APP_SECRET = ''

// 如果不是jest测试环境
if (process.env.npm_lifecycle_event !== 'test') {
  VITE_APP_API = import.meta.env.VITE_APP_API
  VITE_APP_SECRET = import.meta.env.VITE_APP_SECRET
} else {
  // 如果是jest测试环境
  VITE_APP_API = process.env.VITE_APP_API as string
}
const BASE_URL = VITE_APP_API as string

// ### 定义提示框的逻辑，比如antd，就可以是message.info，诸如此类
const notify = (message: string) => message

// 定义请求状态码的回调
const callBackByErrorCode: { [key: number]: (res: AxiosError) => void } = {
  401: (res: AxiosError) => {
    // ### 状态码回调
  }
}

// 默认请求配置
const defaultConfig: HttpParams = {
  baseURL: BASE_URL,
  timeout: 30000,
  options: {
    authApi: true,
    // loading加载
    globalLoading: true
  },
  headers: {
    Accept: 'application/json'
  }
}

// 创建instance实例
const instance = axios.create(defaultConfig)

// 添加axios请求拦截器
instance.interceptors.request.use((config: HttpParams): any => {
  // 判断本次请求传递globalLoading是true/false，如果是false，本次请求不加载全局loading
  if (config.options?.globalLoading) {
    // ### 全局的loading开始加载
  }
  // 如果当前config中存在authApi=true就设置Authorization，如果authApi没传就是私有接口
  if (config.options?.authApi || typeof config.options?.authApi === 'undefined') {
    // ### 获取token，把值赋给token变量
    const token = ''
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 添加axios响应拦截器
instance.interceptors.response.use((config: AxiosResponse<unknown>): AxiosResponse<unknown> => {
  // ### 全局的loading取消加载
  return config
})

// 处理请求错误的函数
function handleError(error: AxiosError) {
  if (axios.isCancel(error)) {
    // 如果是用户主动取消的
    return
  }
  if (typeof error.response?.status === 'number') {
    // 根据返回的状态码去处理对应的回调函数
    const statusCallBack = callBackByErrorCode[error.response?.status]
    if (statusCallBack) {
      statusCallBack(error)
      return
    }
  }
  if (error.response) {
    // 服务器错误
    notify(error.response.data.message || '系统错误：数据获取失败')
  }
}

// 获取请求参数的方法
function getRequestParams(params: ConfigParams) {
  // 处理不同请求，请求体不一样的问题
  const _data = params.data
  delete params.data
  if (params.method?.toLocaleLowerCase() === 'get') {
    _data && (params.params = _data)
  } else {
    _data && (params.data = _data)
  }
  return params
}

// 转换参数
function transformParams(params: HttpParams) {
  // ### 判断请求的类型, 处理请求体
  // ### 在这里可以对api进行签名，比如说如下
  // data: requestSign(VITE_APP_SECRET, params.url, params.data),
  return getRequestParams({
    method: params.method,
    url: params.url,
    data: params.data,
    ...params
  })
}

export default function useRequest<R = unknown>(params: HttpParams): Promise<R> {
  // 对请求的参数做一个transform
  return new Promise((resolve, reject) => {
    instance
      .request(transformParams(params))
      .then((res) => {
        if ([200, 204].includes(res.status)) {
          resolve({
            ...res.data
          })
        }
      })
      .catch((error: AxiosError) => {
        // 如果请求出错，则把全局的loading取消掉
        handleError(error)
        reject(error)
      })
  })
}