import HttpService, { HttpParams } from "../../common/service/request";

const http = new HttpService();

// 请求的其他选项
type Options = {
  headers?: any;
  authApi?: boolean;
};
export interface IBasicApi {
  url: string;
  // add
  create: (params: { data: any; options?: Options }) => Promise<ActionResult>;
  // delete
  deleteByID: (params: {
    data: { id: string };
    options?: Options;
  }) => Promise<ActionResult>;
  // update
  updateByID: (params: {
    data: { id: string; [key: string]: any };
    options?: Options;
  }) => Promise<ActionResult>;
  // read
  read: (params: { options?: Options }) => Promise<ActionResult>;
  // read
  readByID: (params: {
    data: { id: string };
    options?: Options;
  }) => Promise<ActionResult>;
}

// 混入options到请求体中
const mixinOptionToHttpParams = (params: any, _data: any): HttpParams => {
  return Object.assign(_data, {
    config: {
      headers: params.options?.headers,
      authApi: params.options?.authApi,
    },
  });
};

export default class BasicApi implements IBasicApi {
  public url: string;
  constructor(data: { version: string; moduleName: string }) {
    const { version = "", moduleName } = data;
    this.url = `${version === "" ? "" : "/" + version}/${moduleName}`;
  }
  /**
   * @name 新增数据
   * @params {Object} params - 需要新增的数据结构体
   * @description This code is completed by the generator (create)
   * @returns Data
   */
  async create(params: {
    data: any;
    options?: Options;
  }): Promise<ActionResult> {
    return await http.request(
      mixinOptionToHttpParams(params, {
        method: "POST",
        url: this.url,
        data: params.data,
      })
    );
  }
  /**
   * @name 删除指定资源
   * @params {Object} params - 删除指定资源API的参数
   * @params {string} params.id - 资源ID
   * @description This code is completed by the generator (delete)
   * @returns Data
   */
  async deleteByID(params: {
    data: { id: string };
    options?: Options;
  }): Promise<ActionResult> {
    return await http.request(
      mixinOptionToHttpParams(params, {
        method: "DELETE",
        url: this.url + `/${params.data.id}`,
      })
    );
  }
  /**
   * @name 修改指定资源
   * @params {Object} params - 修改指定资源API的参数
   * @params {string} params.id - 资源ID
   * @description This code is completed by the generator (update)
   * @returns Data
   */
  async updateByID(params: {
    data: { id: string };
    options?: Options;
  }): Promise<ActionResult> {
    return await http.request(
      mixinOptionToHttpParams(params, {
        method: "PATCH",
        url: this.url + `/${params.data.id}`,
        data: params,
      })
    );
  }
  /**
   * @name 获取列表数据
   * @description This code is completed by the generator (read)
   * @returns List<Data>
   */
  async read(params: { options?: Options }): Promise<ActionResult> {
    return await http.request(
      mixinOptionToHttpParams(params, {
        method: "GET",
        url: this.url,
      })
    );
  }
  /**
   * @name 获取指定资源
   * @params {Object} params - 获取指定资源API的参数
   * @params {string} params.id - 资源ID
   * @description This code is completed by the generator (read)
   * @returns Data
   */
  async readByID(params: {
    data: { id: string };
    options?: Options;
  }): Promise<ActionResult> {
    return await http.request(
      mixinOptionToHttpParams(params, {
        method: "GET",
        url: this.url + `/${params.data.id}`,
      })
    );
  }
}
