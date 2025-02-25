import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(localStorage.getItem('accessToken'));
  const isAuthorized = computed(() => {
    return !!accessToken;
  })
  const refreshToken = (value: string) => {
    accessToken.value = value;
  }

  return { accessToken, isAuthorized, refreshToken }
})
