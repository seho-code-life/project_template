import { createApp } from 'vue'
import App from './App.vue'
import Store from "./store"
import Router from "./router";
import 'ant-design-vue/dist/antd.css';


createApp(App).use(Router).use(Store).mount('#app')
