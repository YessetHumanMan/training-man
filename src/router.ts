
import {createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { useUserStore } from './store/auth.user'



const routes: RouteRecordRaw[] = [
  {
    name: 'Authorization',
    path: '/auth',
    component: () => import('./pages/PageAuthorization.vue'),
  },
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('./pages/PageDashboard.vue'), meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const authStore = useUserStore();
      if (to.meta.requiresAuth && !authStore.isAuth) {
        next(
         '/auth',
        )
      } else {
        next();
      }
    }
  }
  ]
  
  export const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  export function routerPush(name:string,params?:Record<string, string>):ReturnType<typeof router.push>{
    return params === undefined
    ? router.push({name})
    : router.push({name, params})}
