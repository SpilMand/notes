<template>
  <button class="a-button" :class="label ? '' : 'circle'">
    <img v-if="icon" :src="icon" class="a-button__icon">
    <span class="a-button__label">{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '' },
  label: { type: String, default: '' },
})
</script>

<style>
@import './a-button.scss';
</style>