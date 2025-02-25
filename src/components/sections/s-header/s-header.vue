<template>
  <header class="s-header">
    <div class="container">
      <img src="@/assets/images/logo.svg" alt="">
      <aButton icon="src/assets/images/login.svg" label="Вход" @click="popupStore.closeOpen()"/>
    </div>
    <sPopup v-show="popupStore.isOpened" :title="isRegister ? 'Регистрация' : 'Вход в ваш аккаунт'">
      <mPopupAuth />
    </sPopup>
  </header>
</template>

<script setup>
import aButton from '@/components/atoms/a-button/a-button.vue';
import sPopup from '@/components/sections/s-popup/s-popup.vue';
import mPopupAuth from '@/components/molecules/m-popup-auth/m-popup-auth.vue';
import { ref } from 'vue';
import { usePopupStore } from '@/stores/popup';

const popupStore = usePopupStore();

const isRegister = ref(false);
</script>

<style>
@import './s-header.scss';
</style>