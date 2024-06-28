<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '../store/auth.user';
import type { ComputedRef } from 'vue';
import { account } from '../utils/appwrite';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useUserStore()

 interface IAppHeader {
   name: string
   path: string
   icon: string
   show: ComputedRef<boolean>
 }

 const items = ref<IAppHeader[]>([
  {
     name: 'Authorization',
     path: '/auth',
     icon: 'pi pi-key',
     show: computed((): boolean => !authStore.login)
   },
   {
     name: 'Dashboard',
     path: '/',
     icon: 'pi pi-home',
     show: computed((): boolean => !!authStore.login)
   }
   
 ])

//  const logout = async () => {
//   await account.deleteSession('current')
//   authStore.clear(),
//   router.push('/auth')
//  }

</script>

<template>
  <header  class="flex gap-5 py-5 w-full border text-yellow-500 border-yellow-500 bg-zinc-950 px-20">
    <div v-for="item in items" :key="item.name">
      
      <router-link :to="item.path" class="hover:text-yellow-700 transition">
        <div v-if="item.show">
        <span :class="item.icon"></span>
        <span class="ml-2">{{ item.name }}</span>
      </div>
      </router-link>
    </div>
    
    <button v-if="authStore.isAuth" @click="logout()" class="btn-logout">Exit<span class="pi pi-sign-out ml-3"></span></button>
  </header>

  
</template>