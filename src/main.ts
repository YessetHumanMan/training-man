import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query';
import {router} from './router'
import { Client } from 'appwrite';
import 'primeicons/primeicons.css'
import { ValidationProvider, extend } from 'vee-validate';

const pinia = createPinia()

const app = createApp(App)


app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.use(VueQueryPlugin)
app.mount('#app')
