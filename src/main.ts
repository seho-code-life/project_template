import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Router from './router'

createApp(App).use(Router).use(createPinia()).mount('#app')
