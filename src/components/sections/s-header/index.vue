<template>
  <header class="s-header">
    <div class="container">
      <img src="@/assets/images/logo.svg" alt="">
      <AButton icon="src/assets/images/login.svg" label="Вход"/>
    </div>
  </header>
</template>

<script setup>
import AButton from '@/components/atoms/a-button/index.vue'
</script>

<style>
@import './s-header.scss';
</style>