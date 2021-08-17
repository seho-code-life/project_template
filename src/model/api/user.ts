import useRequest from '../../hook/useRequest';

export default class UserApiModel {
  async login(params: TUserModel.ReqLogin): TUserModel.ResLogin {
    return await useRequest({
      url: `${params}`,
      method: 'get',
      options: {
        authApi: true
      }
    });
  }
}
