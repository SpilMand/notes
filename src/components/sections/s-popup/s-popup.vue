<template>
  <section class="s-popup">
    <div class="s-popup__window">
      <aButton class="s-popup__close" icon="src/assets/images/close.svg" @click="store.closeOpen()" />
      <h2 class="s-popup__title">{{ title }}</h2>
      <slot />
    </div>
    <div class="s-popup__backdrop" />
  </section>
</template>

<script setup lang="ts">
import aButton from '@/components/atoms/a-button/a-button.vue';
import { ref } from 'vue';
import { usePopupStore } from '@/stores/popup';

defineProps({
  title: { type: String, default: 'Регистрация' }
})

const store = usePopupStore();

const isOpen = ref(true);
</script>

<style>
@import './s-popup.scss';
</style>