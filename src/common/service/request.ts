import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  Method,
} from "axios";
// @ts-ignore
import Cookie from "js-cookie";
import { message } from "ant-design-vue";
import store from "../../store";
// @ts-ignore
import requestSign from "zigg-request-sign";

const { VITE_APP_ADMIN_API, VITE_APP_SECRET } = import.meta.env;
const BASE_URL: any = VITE_APP_ADMIN_API;

// 定义请求状态码的回调
const callBackByErrorCode: { [key: number]: (res: AxiosError) => void } = {
  201: () => {
    message.warning("首次登录，请修改密码");
  },
  404: () => {
    message.warning("资源无法访问");
  },
  401: (res: AxiosError) => {
    if (res.response?.data && res.response?.data?.message) {
      message.error(res.response?.data?.message);
    } else {
      message.warning("您的登录状态已过期,请重新登录");
    }
    Cookie.remove("token");
    sessionStorage.clear();
    setTimeout(() => (window.location.href = "/#/"), 2500);
    return;
  },
};

// 请求参数类型约定
type HttpParams = {
  authApi?: boolean; // 是否私有API(即登陆之后才可以访问的api)
} & AxiosRequestConfig;

// 获取config方法的类型约定
type ConfigParams = {
  method: Method;
  url: string;
  data?: any;
  params?: any;
  config: any;
};

let defaultConfig = {
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
};

// 创建instance实例
let instance = axios.create(defaultConfig);

// 添加axios请求拦截器
instance.interceptors.request.use((config: HttpParams): any => {
  // 全局的loading开始加载
  store.commit("setRequestLoading", true);
  // 获取请求参数，不同请求类型参数key也不一样，在这里做一个处理
  const params = config.method === "get" ? config.params : config.data;
  // 判断post参数合法性
  if (!params || Object.prototype.toString.call(params) !== "[object Object]") {
    throw new Error("params is undefined or not an object");
  }
  // 如果当前config中存在authApi就设置私有接口Authorization，没传默认私有接口
  if (config.authApi || typeof config.authApi === "undefined") {
    // 从cookie中获取token
    let token = Cookie.get("token");
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

// 添加axios响应拦截器
instance.interceptors.response.use(
  (config: AxiosResponse<any>): AxiosResponse<any> => {
    // 全局的loading取消加载
    store.commit("setRequestLoading", false);
    return config;
  }
);

interface IRequestService {
  getBaseURL: () => string;
  request: (params: HttpParams) => Promise<ActionResult>;
  transformParams: (params: any) => object;
}

class HttpService implements IRequestService {
  public getBaseURL() {
    return defaultConfig.baseURL;
  }
  private handleError(error: AxiosError) {
    if (axios.isCancel(error)) {
      // 如果是用户主动取消的
      return;
    }
    if (typeof error.response?.status === "number") {
      // 根据返回的状态码去处理对应的回调函数
      const statusCallBack = callBackByErrorCode[error.response?.status];
      statusCallBack && statusCallBack(error);
    }
    if (error.response) {
      // 服务器错误
      message.error(error.response.data.message || "服务端错误");
    } else {
      message.error("请求失败");
    }
  }
  public request(params: HttpParams): Promise<ActionResult> {
    // 定义请求接口需要返回的对象，默认请求失败
    const result: ActionResult = { success: false };
    // 对请求的参数做一个transform
    return new Promise((resolve) => {
      instance
        .request(this.transformParams(params))
        .then((res) => {
          if (res.status === 200) {
            result.success = true;
            result.data = res.data;
          }
        })
        .catch((error: AxiosError) => {
          // 如果请求出错，则把全局的loading取消掉
          store.commit("setRequestLoading", false);
          this.handleError(error);
        });
      resolve(result);
    });
  }
  private getConfig(params: ConfigParams) {
    // 处理不同请求，请求体不一样的问题
    let _data = params.data;
    delete params.data;
    if (params.method === "get") {
      _data && (params.params = _data);
    } else {
      _data && (params.data = _data);
    }
    return params;
  }
  // 转换参数
  transformParams(params: any) {
    // 判断请求的类型, 处理请求体
    return this.getConfig({
      method: params.method,
      url: params.url,
      data: requestSign(VITE_APP_SECRET, params.url, params.data),
      config: params.config,
    });
  }
}

export default HttpService;
