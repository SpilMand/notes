import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popup', () => {
  const isOpened = ref(false);

  function closeOpen() {
    isOpened.value = !isOpened.value;
  }

  return { isOpened, closeOpen }
})
