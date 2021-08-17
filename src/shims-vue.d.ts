declare module '*.vue' {
  import { DefineComponent } from 'vue';

  const component: DefineComponent<never, never, any>;
  export default component;
}

// 接口返回类型
declare type ActionResult<T = any> = {
  success: boolean;
  data?: T;
};
