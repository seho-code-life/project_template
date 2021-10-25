import useRequest from '../../hook/useRequest';
import TUserApiModel from '../../../typings/model/api/list';
export default class ListApiModel {
  addList(params: TUserApiModel.ReqAddList): Promise<TUserApiModel.ResAddList> {
    return useRequest({
      url: '/v1/list',
      method: 'POST',
      data: params
    });
  }
}
