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


const loadUserFromStorage = (): { user: IAuthUser } => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    return { user: JSON.parse(storedUser) };
  }
  return defauldValue
};

const saveUserToStorage = (user: IAuthUser) => {
  localStorage.setItem('user', JSON.stringify(user));
};


export const useUserStore = defineStore('user', {


  
  
  state: () => loadUserFromStorage(),
  getters: {
    isAuth: state => state.user.status,
  },
  actions: {
    clear() {
      this.$patch(defauldValue);
      localStorage.removeItem('user');
    },
    set(input: IAuthUser) {
      this.$patch({
        user: input
      })
      saveUserToStorage(input);
    }
  }

}
)

