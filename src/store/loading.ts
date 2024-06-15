import { defineStore } from "pinia"

export const isGlobalLoading = defineStore('isLoading', {
  state: () => ({
    isLoading: true
  }),
  actions: {
    set(data: boolean) {
      this.$patch({
        isLoading: data
      })
    }
  }
})