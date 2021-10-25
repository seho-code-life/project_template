import useRequest from '../../hook/useRequest';
import TListApiModel from '../../../typings/model/api/list';
export default class ListApiModel {
  addList(params: TListApiModel.ReqAddList): Promise<TListApiModel.ResAddList> {
    return useRequest({
      url: '/v1/list',
      method: 'POST',
      data: params
    });
  }
}
