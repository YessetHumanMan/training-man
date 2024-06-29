import { defineStore } from "pinia"

export const useSlider = defineStore('slider', {
  state: () => ({
    isOpen: false
  }),
  actions: {
    set(data: boolean) {
      this.$patch({
        isOpen: data
      })
    }
  }
})