import UserApiModel from '../model/api/user';
import { UserLocalStorage, UserCookie } from '../model/cache/user';

export default class UserController {
  private localStorageModel: UserLocalStorage;
  private cookieModel: UserCookie;
  private apiModel: UserApiModel;

  constructor() {
    this.apiModel = new UserApiModel();
    this.localStorageModel = new UserLocalStorage();
    this.cookieModel = new UserCookie();
  }
  async login(req: TUserModel.ReqLogin): TUserModel.ResLogin {
    return await this.apiModel.login(req);
  }
}
