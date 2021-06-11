import { createApp } from 'vue'
import App from './App.vue'
import Store from "./store"
import Router from "./router";

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onOfflineReady() {
    // show a ready to work offline to user
  },
})

createApp(App).use(Router).use(Store).mount('#app')
