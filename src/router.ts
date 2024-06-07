
import {createWebHashHistory, createRouter, RouteRecordRaw, RouteParams } from 'vue-router'
import {NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { onAuthStateChanged, getAuth } from 'firebase/auth'



const checkAuth = (to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) => {
  let isAuth = false


  onAuthStateChanged(getAuth(), (user => {
    if (user && !isAuth) {
      isAuth = true
      next()
    } else if (!user && !isAuth) {
      isAuth = true
      next('/auth')
    }
  })
  )
}

export const routes: RouteRecordRaw[] = [
  {
    name: 'Authorization',
    path: '/auth',
    component: () => import('./pages/PageAuthorization.vue'),
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('./pages/PageHome.vue'),
    beforeEnter: checkAuth
  }
  ]
  
  export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })

  export function routerPush(name:string,params?:RouteParams):ReturnType<typeof router.push>{
    return params === undefined
    ? router.push({name})
    : router.push({name, params})
    }

