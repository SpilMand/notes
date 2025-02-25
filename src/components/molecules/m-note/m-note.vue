<template>
  <div class="m-note">
    <div class="m-note__head">
      <h4 class="m-note__title">{{ data.title }}</h4>
      <img src="@/assets/images/triangle.svg" class="m-note__triangle">
    </div>
    <p class="m-note__text">{{ data.content }}</p>
    <div class="m-note__actions">
      <aButton label="Удалить" icon="src/assets/images/close.svg" />
    </div>
  </div>
</template>

<script setup>
import aButton from '@/components/atoms/a-button/a-button.vue';

defineProps({
  data: { type: Object, default: () => ({}) }
})
</script>

<style>
@import './m-note.scss';
</style>