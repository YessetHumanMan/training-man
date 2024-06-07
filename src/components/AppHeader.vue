<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '../store/user';
import type { computedRef } from 'vue';

const userStore = useUserStore()
 interface IAppHeader {
   name: string
   url: string
   icon: string
   show: computedRef<boolean>
 }

 const items = ref<IAppHeader[]>([
   {
     name: 'Home',
     url: '/',
     icon: 'pi pi-home',
     show: computed(() => !!userStore.userId)
   },
   {
     name: 'Authorization',
     url: '/auth',
     icon: 'pi pi-key',
     show: computed(() => !userStore.userId)
   }
 ])

</script>