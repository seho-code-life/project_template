declare namespace TUserApiModel {
  type ReqLogin = {
    captcha: string;
    password: string;
    username: string;
    uuid: string;
  };

  type ResLogin = Promise<{
    token: string;
  }>;
}
