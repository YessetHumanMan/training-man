import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import App from './App.vue'
import {router} from './router'
import { Client } from 'appwrite';

const pinia = createPinia()


createApp(App)
.use(router)
.use(pinia)
.use(PrimeVue)
.mount('#app')
