<script setup lang="ts">
import  AppHeader  from './components/AppHeader.vue';
import { onMounted } from 'vue';
import { useUserStore } from './store/auth.user';
import { account } from './utils/appwrite';
import { useRouter } from 'vue-router';

const router = useRouter()

const authStore = useUserStore()

onMounted(async () => {
  
  try {
    const user = await account.get()
   authStore.set(user)
  } catch (error) {
    router.push('/auth')
  } 
})


</script>

<template>
  <app-header/>
  <RouterView/>
</template>

<style scoped>

</style>
