<template>
  <div class="m-popup-reg">
    <div class="m-popup-reg__inputs">
      <aInput label="Email" />
      <aInput label="Пароль" placeholder="Введите пароль" :isPassword="true" />
      <aInput label="Пароль ещё раз" placeholder="Введите пароль" :isPassword="true" />
    </div>
    <div class="m-popup-reg__actions">
      <div class="m-popup-reg__text">
        <span class="text-small gray">У вас есть аккаунт?</span>
      <a @click="store.changeType()">Войдите</a>
      </div>
      <aButton class="m-popup-reg__button" label="Зарегистрироваться" />
    </div>
  </div>
</template>

<script setup>
import aInput from '@/components/atoms/a-input/a-input.vue';
import aButton from '@/components/atoms/a-button/a-button.vue';
import { usePopupStore } from '@/stores/popup';

// import api from '@/api/api';

const store = usePopupStore();
</script>

<style>
@import './m-popup-reg.scss';
</style>