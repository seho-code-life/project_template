import useRequest from '../../hook/useRequest'
import TListApiModel from '../../../typings/model/api/list'
export default class ListApiModel {
  createList(params: TListApiModel.ReqCreateList): Promise<TListApiModel.ResCreateList> {
    return useRequest({
      url: '/v1/list',
      method: 'POST',
      data: params
    })
  }
}
