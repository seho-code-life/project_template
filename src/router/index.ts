import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

const routerHashHistory = createWebHashHistory();
const Router = createRouter({
  history: routerHashHistory,
  routes
});
export default Router;
