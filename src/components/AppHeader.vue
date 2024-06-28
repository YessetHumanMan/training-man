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

const handleLogout = async () => {
  try {
    await authStore.logout();
    router.push('/auth'); // Перенаправление на страницу логина после выхода
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

</script>

<template>
  <header  class="flex gap-5 py-5 w-full border text-yellow-500 border-yellow-500 bg-zinc-950 px-20">
    <div v-for="item in items" :key="item.name">
      <div v-if="item.show">
      <router-link :to="item.path" class="hover:text-yellow-700 transition">
        
        <span :class="item.icon"></span>
        <span class="ml-2">{{ item.name }}</span>
      
      </router-link>
    </div>
    </div>
    
    <button v-if="authStore.login" @click="handleLogout()"  class="btn-logout">Exit<span class="pi pi-sign-out ml-3"></span></button>
  </header>

  
</template>