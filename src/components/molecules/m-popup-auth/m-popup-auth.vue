<template>
  <div class="m-popup-auth">
    <div class="m-popup-auth__inputs">
      <aInput label="Email" />
      <aInput label="Пароль" placeholder="Введите пароль" />
    </div>
    <div class="m-popup-auth__actions">
      <div class="m-popup-auth__text">
        <span class="text-small gray">У Вас нет аккаунта?</span>
        <a href="">Зарегистрируйтесь</a>
      </div>
      <aButton class="m-popup-auth__button" label="Войти" />
    </div>
  </div>
</template>

<script setup>
import aInput from '@/components/atoms/a-input/a-input.vue';
import aButton from '@/components/atoms/a-button/a-button.vue';
</script>

<style>
@import './m-popup-auth.scss';
</style>