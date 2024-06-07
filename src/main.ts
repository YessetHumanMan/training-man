import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import {router} from './router'

const pinia = createPinia()


const firebaseConfig = {
  apiKey: "AIzaSyBtNfrWSJhMbAwJTVoLoXrDGUFAgReJ4H8",
  authDomain: "training-man.firebaseapp.com",
  projectId: "training-man",
  storageBucket: "training-man.appspot.com",
  messagingSenderId: "179836391078",
  appId: "1:179836391078:web:87c52ed8edfa656e9fae67"
};


initializeApp(firebaseConfig);

createApp(App)
.use(router)
.use(pinia)
.use(PrimeVue)
.mount('#app')
