import useRequest from '../../hook/useRequest';
import TUserApiModel from '../../@types/model/api/user';
export default class UserApiModel {
  async login(params: TUserApiModel.ReqLogin): TUserApiModel.ResLogin {
    return await useRequest({
      url: `${params}`,
      method: 'get',
      options: {
        authApi: true
      }
    });
  }
  async userMock(): Promise<ActionResult<unknown>> {
    return await useRequest({
      url: `/api/get`,
      method: 'get',
      options: {
        authApi: false
      }
    });
  }
}
