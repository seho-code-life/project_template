import TListApiModel from '../../typings/model/api/list'
import ListApiModel from '../model/api/list'
export default class ListController {
  private apiModel: ListApiModel
  constructor() {
    this.apiModel = new ListApiModel()
  }
  /**
   * @name 新增列表项
   * @param {TListApiModel.ReqCreateList} params
   * @memberof ListController
   * @link https://api-doc.zhigui.com/project/57/interface/api/1304
   * @return {*}
   */
  createList(params: TListApiModel.ReqCreateList) {
    return this.apiModel.createList(params)
  }
}
