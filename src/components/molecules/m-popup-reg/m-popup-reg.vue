<template>
  <div class="m-popup-reg">
    <div class="m-popup-reg__inputs">
      <aInput label="Email" @enterData="enterEmail" />
      <aInput label="Пароль" placeholder="Введите пароль" :isPassword="true" @enterData="enterPassword" />
      <aInput label="Пароль ещё раз" placeholder="Введите пароль" :isPassword="true" @enterData="enterPasswordAgain" />
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

<script setup>
import { ref } from 'vue';
import aInput from '@/components/atoms/a-input/a-input.vue';
import aButton from '@/components/atoms/a-button/a-button.vue';
import { usePopupStore } from '@/stores/popup';
import { reg, auth } from '@/api/api';

const store = usePopupStore();

const data = {
  email: '',
  password: '',
  confirm_password: '',
}

const errorMessage = ref();

const enterEmail = (value) => {
  data.email = value;
}
const enterPassword = (value) => {
  data.password = value;
}
const enterPasswordAgain = (value) => {
  data.confirm_password = value;
}

const registration = async () => {
  const response = await reg(data);
  if (response.type == 'error') {
    if (typeof(response.message) == String) {
      errorMessage.value = response.message;
    } else {
      errorMessage.value = response.message[0];
    }
  } else {
    await auth(data);
  }
}
</script>

<style>
@import './m-popup-reg.scss';
</style>