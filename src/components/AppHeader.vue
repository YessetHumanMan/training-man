<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '../store/auth.user';
import type { ComputedRef } from 'vue';

const userStore = useUserStore()
 interface IAppHeader {
   name: string
   url: string
   icon: string
   show: ComputedRef<boolean>
 }

 const items = ref<IAppHeader[]>([
   {
     name: 'Home',
     url: '/',
     icon: 'pi pi-home',
     show: computed((): boolean => !!userStore.userId)
   },
   {
     name: 'Authorization',
     url: '/auth',
     icon: 'pi pi-key',
     show: computed((): boolean => !userStore.userId)
   }
 ])




</script>

<template>
  <header class="flex gap-5 py-5 px-3 w-full border text-yellow-500 border-yellow-500 bg-zinc-950">
    <div v-for="item in items" :key="item.name">
      <router-link :to="item.url" class="hover:text-yellow-700 transition">
        <span :class="item.icon"></span>
        <span>{{ item.name }}</span>
        
      </router-link>
    </div>
  </header>

  
</template>