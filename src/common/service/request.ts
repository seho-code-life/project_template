import axios, { AxiosRequestConfig, Method } from "axios";
// @ts-ignore
import Cookie from "js-cookie";
// @ts-ignore
import requestSign from "zigg-request-sign";
const { VITE_APP_ADMIN_API, VITE_APP_SECRET } = import.meta.env;
const BASE_URL = VITE_APP_ADMIN_API + "/v1";
// const BASE_URL = 'http://192.168.2.36:9999/v1';

// 请求参数类型约定
type HttpParams = {
  authApi?: boolean; // 是否私有
} & AxiosRequestConfig;

type HttpConfig = {
  isLoading: boolean;
};

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
instance.interceptors.request.use(
  (config: HttpParams): any => {
    // 获取请求参数，不同请求类型参数key也不一样，在这里做一个处理
    const params = config.method === "get" ? config.params : config.data;
    // 判断post参数合法性
    if (
      !params ||
      Object.prototype.toString.call(params) !== "[object Object]"
    ) {
      throw new Error("params is undefined or not an object");
    }
    // 如果当前config中存在authApi就设置私有接口Authorization，没传默认私有接口
    if (config.authApi || typeof config.authApi === "undefined") {
      // 从cookie中获取token
      let token = Cookie.get("token");
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  }
);

let requestCount = 0;

// function showLoading() {
//     if(requestCount === 0) {
//         var dom = document.createElement('div');
//         dom.setAttribute('id', 'loading');
//         document.body.appendChild(dom);
//         ReactDOM.render(<Spin tip=""  size="large"/>, dom)
//     }
//     requestCount++;
// }
// function hideLoading () {
//     requestCount--
//     if (requestCount === 0) {
//         document.body.removeChild(document.getElementById('loading'))
//     }
// }
function handleError(error: any, vc: any) {
  //是否传递了vue component
  if (vc) {
    vc.loading = false;
  }
  if (axios.isCancel(error)) {
    // 如果是用户主动取消的
    return;
  }
  if (error.response) {
    // 服务器错误
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    if (error.response.status === 401) {
      if (error.response.data && error.response.data.message) {
        // message.error({
        //     content: error.response.data.message,
        // });
      } else {
        // message.error({
        //     content: '您的登录状态已过期,请重新登录',
        // });
      }
      Cookie.remove("token");
      sessionStorage.clear();
      setTimeout(() => (window.location.href = "/#/"), 2500);
      return;
    }
    // message.error({
    //     content: error.response.data.message || '服务端错误',
    // });
    if (Number(error.response.data.err_code) === 1001) {
      setTimeout(() => (window.location.href = "/#/"), 2500);
      Cookie.remove("token");
      sessionStorage.clear();
    }
  } else if (error.request) {
    // message.error({
    //     content: '请求失败',
    // });
  } else {
    // message.error({
    //     content: '请求失败',
    // });
  }
}


var http = {
  getBaseURL: () => {
    return defaultConfig.baseURL;
  },
  request: (params: HttpParams, config: HttpConfig) => {
    // 对请求的参数做一个transform
    return new Promise((resolve, reject) => {
      instance
        .request(http.transformParams(params))
        .then((res) => {
          if (!config || config.isLoading !== false) {
            // hideLoading();
          }
          if (res.status === 200) {
            resolve(res.data);
          } else if (res.status === 201) {
            // message.warning({
            //   content: "首次登录，请修改密码",
            // });
            setTimeout(
              () => (window.location.href = "/#/reset-password"),
              2500
            );
          } else {
            // handleError(res, params.vc);
            reject(res);
          }
        })
        .catch((error) => {
          if (!config || config.isLoading !== false) {
            // hideLoading();
          }
          //   handleError(error, params.vc);
          reject(error);
        });
    });
  },
  getConfig: (params: ConfigParams) => {
    // 处理不同请求，请求体不一样的问题
    let _data = params.data;
    delete params.data;
    if (params.method === "get") {
      _data && (params.params = _data);
    } else {
      _data && (params.data = _data);
    }
    return params;
  },
  // 转换参数
  transformParams: (params: any) => {
    // 判断请求的类型, 处理请求体
    return http.getConfig({
      method: params.method,
      url: params.url,
      data: requestSign(VITE_APP_SECRET, params.url, params.data),
      config: params.config,
    });
  },
};

export default http;
