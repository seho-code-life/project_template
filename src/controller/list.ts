import TListApiModel from '../../typings/model/api/list';
import ListApiModel from '../model/api/list';
export default class ListController {
  private apiModel: ListApiModel;
  constructor() {
    this.apiModel = new ListApiModel();
  }
  addList(params: TListApiModel.ReqAddList) {
    return this.apiModel.addList(params);
  }
}
