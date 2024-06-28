import {defineStore} from 'pinia'
import {ref} from 'vue'
import { account } from '../utils/appwrite';

// interface IAuthUser {
//   email: string
//     name: string
//     status: boolean
  
// }


// const defaultValue: { user: IAuthUser} = {
//   user: {
//     email: '',
//     name: '',
//     status: false
//   }
// }

export const useUserStore = defineStore('user', {

  state: () => ({
    token: localStorage.getItem('appwrite_token') || null
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await account.createSession(email, password);
        this.token = response.$id; // Получаем токен сессии
        localStorage.setItem('appwrite_token', response.$id);
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
    async logout() {
      try {
        await account.deleteSession('current');
        this.token = null;
        localStorage.removeItem('appwrite_token');
      } catch (error) {
        console.error('Logout error:', error);
        throw error;
      }
    },
    async checkSession() {
      try {
        const response = await account.get();
        this.token = response.$id;
        localStorage.setItem('appwrite_token', response.$id);
      } catch (error) {
        console.error('Check session error:', error);
        this.logout();
      }
    }
  },



  // getters: {
  //   isAuth: state => !!state.user.status,
  // },
  // actions: {
  //   clear() {
  //     this.$patch(defaultValue);
      
  //   },
  //   set(input: IAuthUser) {
  //     this.$patch({
  //       user: input
  //     })
  //   }
  // }

}
)

