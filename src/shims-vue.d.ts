declare module '*.vue' {
  import { DefineComponent } from 'vue';

  const component: DefineComponent<never, never, any>;
  export default component;
}