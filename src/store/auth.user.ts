import {defineStore} from 'pinia'
import {ref} from 'vue'

interface IAuthUser {
  email: string
    name: string
    status: boolean
  
}


const defauldValue: { user: IAuthUser} = {
  user: {
    email: '',
    name: '',
    status: false
  }
}

export const useUserStore = defineStore('user', {

  state: () => defauldValue,
  getters: {
    isAuth: state => state.user.status
  },
  actions: {
    clear() {
      this.$patch(defauldValue);
      
    },
    set(input: IAuthUser) {
      this.$patch({
        user: input
      })
    }
  }

}
)

