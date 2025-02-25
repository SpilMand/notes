import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popup', () => {
  const isOpened = ref(false);
  const isNoteOpened = ref(false);
  const isRegister = ref(false);

  function closeOpen() {
    isOpened.value = !isOpened.value;
  }

  function noteCloseOpen() {
    isNoteOpened.value = !isNoteOpened.value;
  }

  function changeType() {
    isRegister.value = !isRegister.value;
  }

  return { isOpened, isRegister, isNoteOpened, closeOpen, noteCloseOpen, changeType }
})
