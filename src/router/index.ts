import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routerHashHistory = createWebHashHistory()
const routes = setupLayouts(generatedRoutes)

const Router = createRouter({
  history: routerHashHistory,
  routes
})

export default Router
