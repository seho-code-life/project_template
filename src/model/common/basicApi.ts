import HttpService from "../../common/service/request";

const http = new HttpService();

interface IBasicApi {
  url: string;
  create: (params: any) => Promise<ActionResult>;
  deleteByID: (params: { id: string }) => Promise<ActionResult>;
  update: (params: { id: string }) => Promise<ActionResult>;
  read: () => Promise<ActionResult>;
  readByID: (params: { id: string }) => Promise<ActionResult>;
}

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
  async create(params: any): Promise<ActionResult> {
    return await http.request({
      method: "POST",
      url: this.url,
      data: params,
    });
  }
  /**
   * @name 删除指定资源
   * @params {Object} params - 删除指定资源API的参数
   * @params {string} params.id - 资源ID
   * @description This code is completed by the generator (delete)
   * @returns Data
   */
  async deleteByID(params: { id: string }): Promise<ActionResult> {
    return await http.request({
      method: "DELETE",
      url: this.url + `/${params.id}`,
    });
  }
  /**
   * @name 修改指定资源
   * @params {Object} params - 修改指定资源API的参数
   * @params {string} params.id - 资源ID
   * @description This code is completed by the generator (update)
   * @returns Data
   */
  async update(params: any): Promise<ActionResult> {
    return await http.request({
      method: "PATCH",
      url: this.url + `/${params.id}`,
      data: params,
    });
  }
  /**
   * @name 获取列表数据
   * @description This code is completed by the generator (read)
   * @returns List<Data>
   */
  async read(): Promise<ActionResult> {
    return await http.request({
      method: "GET",
      url: this.url,
    });
  }
  /**
   * @name 获取指定资源
   * @params {Object} params - 获取指定资源API的参数
   * @params {string} params.id - 资源ID
   * @description This code is completed by the generator (read)
   * @returns Data
   */
  async readByID(params: { id: string }): Promise<ActionResult> {
    return await http.request({
      method: "GET",
      url: this.url + `/${params.id}`,
    });
  }
}
