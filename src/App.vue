<script setup lang="ts">
import  AppHeader  from './components/AppHeader.vue';
import { onMounted } from 'vue';
import { useUserStore } from './store/auth.user';
import { account } from './utils/appwrite';
import { useRouter } from 'vue-router';
import { ChatSession } from 'firebase/vertexai-preview';
import { router } from './router';


const authStore = useUserStore()

onMounted(async () => {
  try {
    await authStore.checkSession();
  } catch (error) {
    console.error('Error during session check on mount:', error);
    // Опционально, перенаправьте пользователя на страницу логина при ошибке
    router.push('/auth');
  }
});


</script>

<template>
  <app-header/>
  <RouterView/>
</template>

<style scoped>

</style>
