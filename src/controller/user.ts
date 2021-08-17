import UserApiModel from '../model/api/user';
const apiModel = new UserApiModel();

export default class UserController {
  async login(req: TUserModel.ReqLogin): TUserModel.ResLogin {
    return await apiModel.login(req);
  }
}
