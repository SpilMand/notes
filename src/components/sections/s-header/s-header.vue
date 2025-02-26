<template>
  <header class="s-header">
    <div class="container">
      <img src="@/assets/images/logo.svg" alt="">
      <div v-if="authStore.accessToken" class="s-header__user-info">
        <span class="s-header__email text-small">{{ email }}</span>
        <img src="@/assets/images/user.svg" class="s-header__user" @click="exitOpened = !exitOpened">
        <div v-show="exitOpened" class="s-header__exit">
          <img src="@/assets/images/vector.svg">
          <a @click="clickExit">Выйти</a>
        </div>
      </div>
      <aButton v-else icon="src/assets/images/login.svg" label="Вход" @click="popupStore.closeOpen()"/>
    </div>
    <sPopup
      v-show="popupStore.isOpened && !authStore.accessToken"
      :title="popupStore.isRegister ? 'Регистрация' : 'Вход в ваш аккаунт'"
    >
      <mPopupReg v-if="popupStore.isRegister"/>
      <mPopupAuth v-else />
    </sPopup>
  </header>
</template>

<script setup lang="ts">
import aButton from '@/components/atoms/a-button/a-button.vue';
import sPopup from '@/components/sections/s-popup/s-popup.vue';
import mPopupAuth from '@/components/molecules/m-popup-auth/m-popup-auth.vue';
import mPopupReg from '@/components/molecules/m-popup-reg/m-popup-reg.vue';
import { ref, computed, watch } from 'vue';
import { usePopupStore } from '@/stores/popup';
import { useAuthStore } from '@/stores/auth';
import { exit } from '@/api/api';

const popupStore = usePopupStore();
const authStore = useAuthStore();

const exitOpened = ref(false);

const email = computed(() => {
  if (localStorage.getItem('Email')) {
    return localStorage.getItem('Email');
  } else {
    return authStore.email;
  }
})

const clickExit = async () => {
  await exit(localStorage.getItem('accessToken'));
  localStorage.removeItem('accessToken');
  localStorage.removeItem('Email');
  authStore.refreshToken('');
  exitOpened.value = false;
}

</script>

<style>
@import './s-header.scss';
</style>