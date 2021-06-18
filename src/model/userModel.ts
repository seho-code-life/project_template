import BaseApi from "../model/common/basicApi";

// 用户状态，是否开启/注销
export enum EStatus {
  BAN = 0,
  OPEN = 1
}

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

// 用户基类
export default class UserModel extends BaseApi {
  constructor() {
    super({
      version: "v1",
      moduleName: "user"
    });
  }
  public id: number | undefined;
  public name: string = "";
  // 默认启用这个状态
  public status: string = EStatus[1];
  // 返回一个只读属性，用于获取状态的中文名称
  public get conversionStatusHint(): string {
    const _: { [key: string]: string } = { BAN: "禁用", OPEN: "启用" };
    return getKeyValue(_)(this.status);
  }
  // 后端转换成前端数据，比如后端的create_time，前端需要createTime，在基类统一转换，方便调用
  public setData(data: UserModel): void | this {
    if (data) {
      for (let e in this) {
        if ((<Object>data).hasOwnProperty(e)) {
          if (e == "status") {
            this.status = EStatus[(<any>data)[e]];
          } else {
            this[e] = (<any>data)[e];
          }
        }
      }
      return this;
    }
  }
}