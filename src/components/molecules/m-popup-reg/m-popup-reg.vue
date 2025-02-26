<template>
  <div class="m-popup-reg">
    <div class="m-popup-reg__inputs">
      <aInput label="Email" @enterData="enterEmail" />
      <aInput
        label="Пароль"
        placeholder="Введите пароль"
        :isPassword="true"
        @enterData="enterPassword"
        :maxCount="12"
      />
      <aInput
        label="Пароль ещё раз"
        placeholder="Введите пароль"
        :isPassword="true"
        @enterData="enterPasswordAgain"
        :maxCount="12"
      />
    </div>
    <div class="m-popup-reg__actions">
      <div class="m-popup-reg__text">
        <span class="text-small gray">У вас есть аккаунт?</span>
      <a @click="store.changeType()">Войдите</a>
      </div>
      <aButton class="m-popup-reg__button" label="Зарегистрироваться" @click="registration()" />
    </div>
    <div v-show="errorMessage" class="m-popup__error text-small red">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import aInput from '@/components/atoms/a-input/a-input.vue';
import aButton from '@/components/atoms/a-button/a-button.vue';
import { usePopupStore } from '@/stores/popup';
import { useAuthStore } from '@/stores/auth';
import { reg, auth, getUser } from '@/api/api';

const store = usePopupStore();
const authStore = useAuthStore();

const data = {
  email: '',
  password: '',
  confirm_password: '',
}

const errorMessage = ref();

const enterEmail = (value: string) => {
  data.email = value;
}
const enterPassword = (value: string) => {
  data.password = value;
}
const enterPasswordAgain = (value: string) => {
  data.confirm_password = value;
}

const registration = async () => {
  const response = await reg(data);
  if (response.type == 'error') {
    if (typeof(response.data.response.data.message) == 'string') {
      errorMessage.value = response.data.response.data.message;
    } else {
      errorMessage.value = response.data.response.data.message[0];
    }
  } else {
    const authData = await auth(data);
    localStorage.setItem('accessToken', authData.data.data.accessToken);
    authStore.refreshToken(authData.data.data.accessToken);
    store.isOpened = false;
    const userData = await getUser(authStore.accessToken);
    authStore.setEmail(userData ? userData.data.email : '');
    localStorage.setItem('Email', userData ? userData.data.email : '');
  }
}
</script>

<style>
@import './m-popup-reg.scss';
</style>