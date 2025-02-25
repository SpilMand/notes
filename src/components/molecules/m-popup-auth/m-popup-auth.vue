<template>
  <div class="m-popup-auth">
    <div class="m-popup-auth__inputs">
      <aInput label="Email" @enterData="enterEmail" />
      <aInput label="Пароль" placeholder="Введите пароль" :isPassword="true" @enterData="enterPassword" />
    </div>
    <div class="m-popup-auth__actions">
      <div class="m-popup-auth__text">
        <span class="text-small gray">У Вас нет аккаунта?</span>
        <a @click="store.changeType()">Зарегистрируйтесь</a>
      </div>
      <aButton class="m-popup-auth__button" label="Войти" @click="authorize()" />
    </div>
  </div>
</template>

<script setup>
import aInput from '@/components/atoms/a-input/a-input.vue';
import aButton from '@/components/atoms/a-button/a-button.vue';
import { usePopupStore } from '@/stores/popup';
import { auth } from '@/api/api';
import { useAuthStore } from '@/stores/auth';

const store = usePopupStore();
const authStore = useAuthStore();

const data = {
  email: '',
  password: '',
}

const enterEmail = (value) => {
  data.email = value;
}
const enterPassword = (value) => {
  data.password = value;
}

const authorize = async () => {
  const response = await auth(data);
  localStorage.setItem('accessToken', response.data.accessToken);
  authStore.refreshToken(response.data.accessToken);
  store.isOpened = false;

}
</script>

<style>
@import './m-popup-auth.scss';
</style>