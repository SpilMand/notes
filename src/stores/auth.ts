import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(localStorage.getItem('accessToken'));
  const email = ref('');
  const isAuthorized = computed(() => {
    return !!accessToken;
  })
  const refreshToken = (value: string) => {
    accessToken.value = value;
  }
  const setEmail = (value: string) => {
    email.value = value;
  }

  return { accessToken, email, isAuthorized, refreshToken, setEmail }
})
