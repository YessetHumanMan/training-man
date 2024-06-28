import {defineStore} from 'pinia'
import {ref} from 'vue'

interface IAuthUser {
  email: string
    name: string
    status: boolean
  
}


const defaultValue: { user: IAuthUser} = {
  user: {
    email: '',
    name: '',
    status: false
  }
}

export const useUserStore = defineStore('user', {

  state: () => defaultValue,
  getters: {
    isAuth: state => !!state.user.status,
  },
  actions: {
    clear() {
      this.$patch(defaultValue);
      
    },
    set(input: IAuthUser) {
      this.$patch({
        user: input
      })
    }
  }

}
)

