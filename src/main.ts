import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import App from './App.vue'
import {router} from './router'
import { VueQueryPlugin } from '@tanstack/vue-query';
import { Client } from 'appwrite';
import 'primeicons/primeicons.css'
import { ValidationProvider, extend } from 'vee-validate';
import { useUserStore } from './store/auth.user';

const pinia = createPinia()

const app = createApp(App)



app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.use(VueQueryPlugin)
app.mount('#app')


const authStore = useUserStore();
authStore.checkSession();
