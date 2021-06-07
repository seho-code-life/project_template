import axios, { AxiosRequestConfig, Method } from "axios";
// @ts-ignore
import Cookie from "js-cookie";
// @ts-ignore
import requestSign from "zigg-request-sign";
const BASE_URL = process.env.REACT_APP_ADMIN_API + "/v1";
// const BASE_URL = 'http://192.168.2.36:9999/v1';

let defaultConfig = {
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    // 'Authorization': '',
    // 'locale': ''
  },
};
let instance = axios.create(defaultConfig);

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

// get/post接口的参数
type RequestParams = {
  url: string;
  data: any;
  config: any;
};
const http = {
  getBaseURL: () => {
    return defaultConfig.baseURL;
  },
  request: (params: HttpParams, config: HttpConfig) => {
    if (
      !params ||
      Object.prototype.toString.call(params) !== "[object Object]"
    ) {
      throw new Error("params is undefined or not an object");
    }
    //设置私有接口Authorization
    if (params.authApi) {
      let token = Cookie.get("token");
      instance.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      delete instance.defaults.headers.common["Authorization"];
    }

    return new Promise((resolve, reject) => {
      instance
        .request(params)
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
  getConfig: (params: ConfigParams & RequestParams): RequestParams => {
    if (params.method === "get") {
      params.data && (params.params = params.data);
    } else {
      params.data && (params.data = params.data);
    }
    //没有传递authApi参数都是私有接口
    if (!params.config) {
      params.config = {};
      params.config.authApi = true;
    }
    if (params.config && !params.config.hasOwnProperty("authApi"))
      params.config.authApi = true;
    params.config && Object.assign(params, params.config);
    return params;
  },
  // 封装不同请求类型而获取config的快捷方法
  handleGetConfig: (method: Method, params: RequestParams) => {
    return http.getConfig({
      method,
      url: params.url,
      data: requestSign(process.env.REACT_APP_SECRET, params.url, params.data),
      config: params.config,
    });
  },
  get: (params: RequestParams) => {
    if (!params.config || params.config.isLoading !== false) {
      //   showLoading();
    }
    params = http.handleGetConfig("get", params);
    return http.request(params, params.config);
  },
  post: (params: RequestParams) => {
    if (!params.config || params.config.isLoading !== false) {
      //   showLoading();
    }
    params = http.handleGetConfig("post", params);
    return http.request(params, params.config);
  },
};

export default http;
