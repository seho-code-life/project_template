import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../pages/Index/index.vue';
const routerHashHistory = createWebHashHistory();
const Router = createRouter({
  history: routerHashHistory,
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index
    }
  ]
});
export default Router;
