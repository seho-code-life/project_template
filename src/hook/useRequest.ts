import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';
import queryString from 'query-string';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import requestSign from 'zigg-request-sign';

// 请求参数类型约定
export type HttpParams = {
  options?: {
    authApi?: boolean; // 是否私有API(即登陆之后才可以访问的api)
    globalLoading?: boolean;
  };
} & AxiosRequestConfig;

// 获取config方法的类型约定
type ConfigParams = {
  method?: Method;
  url?: string;
  data?: any;
  params?: any;
};

const { VITE_APP_API, VITE_APP_SECRET } = import.meta.env;
const BASE_URL = VITE_APP_API as string;

const notify = (message: string) => message;

// 封装 清空token等信息的方法
const clearLoginState = (callBack?: () => void) => {
  callBack && callBack();
};

// 定义请求状态码的回调
const callBackByErrorCode: { [key: number]: (res: AxiosError) => void } = {
  401: (res: AxiosError) => {
    // 清空 然后返回
    clearLoginState(() => {
      window.location.href = '/#/user/login';
      notify('登录状态已过期，请重新登录');
    });
  }
};

const defaultConfig: HttpParams = {
  baseURL: BASE_URL,
  timeout: 30000,
  options: {
    authApi: true,
    globalLoading: true
  },
  headers: {
    Accept: 'application/json'
  }
};

// 创建instance实例
const instance = axios.create(defaultConfig);

// 添加axios请求拦截器
instance.interceptors.request.use((config: HttpParams): any => {
  // 判断本次请求传递globalLoading是true/false，如果是false，本地请求不加载全局loading
  if (config.options?.globalLoading) {
    // 全局的loading开始加载
    // Toast.loading("");
  }
  // 如果当前config中存在authApi就设置私有接口Authorization，没传默认私有接口
  if (config.options?.authApi || typeof config.options?.authApi === 'undefined') {
    // 获取token
    const token = '';
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 添加axios响应拦截器
instance.interceptors.response.use(
  (config: AxiosResponse<any>): AxiosResponse<any> =>
    // 全局的loading取消加载
    // Toast.hide();
    config
);

// 获取baseurl，向外部提供的方法
export function getBaseURL(): string | undefined {
  return defaultConfig.baseURL;
}

// 处理请求错误的函数
function handleError(error: AxiosError) {
  if (axios.isCancel(error)) {
    // 如果是用户主动取消的
    return;
  }
  if (typeof error.response?.status === 'number') {
    // 根据返回的状态码去处理对应的回调函数
    const statusCallBack = callBackByErrorCode[error.response?.status];
    if (statusCallBack) {
      statusCallBack(error);
      return;
    }
  }
  if (error.response) {
    // 服务器错误
    notify(error.response.data.message || '系统错误：数据获取失败');
  }
}

// 获取请求参数的方法
function getRequestParams(params: ConfigParams) {
  // 处理不同请求，请求体不一样的问题
  const _data = params.data;
  delete params.data;
  if (params.method?.toLocaleLowerCase() === 'get') {
    _data && (params.params = _data);
  } else {
    _data && (params.data = _data);
  }
  return params;
}

// 转换参数
function transformParams(params: HttpParams) {
  // 判断请求的类型, 处理请求体
  return getRequestParams({
    method: params.method,
    url: params.url,
    data: requestSign(VITE_APP_SECRET, params.url, params.data),
    ...params
  });
}

export default function useRequest(params: HttpParams): Promise<ActionResult> {
  // 定义请求接口需要返回的对象，默认请求失败
  const result: ActionResult = { success: false };
  // 对请求的参数做一个transform
  return new Promise((resolve) => {
    instance
      .request(transformParams(params))
      .then((res) => {
        if (res.status === 200) {
          result.success = true;
          result.data = res.data;
        }
        resolve(result);
      })
      .catch((error: AxiosError) => {
        // 如果请求出错，则把全局的loading取消掉

        handleError(error);
        resolve(result);
      });
  });
}

export function useSign(url: string) {
  const token = '';
  let params = {};
  if (token) {
    params = requestSign(VITE_APP_SECRET, url, { token });
  } else {
    params = requestSign(VITE_APP_SECRET, url);
  }
  return queryString.stringify(params);
}
