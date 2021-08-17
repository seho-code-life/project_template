declare namespace TUserModel {
  export type ReqLogin = {
    captcha: string;
    password: string;
    username: string;
    uuid: string;
  };

  export type ResLogin = Promise<
    ActionResult<{
      token: string;
    }>
  >;
}
