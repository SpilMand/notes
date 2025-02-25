<template>
  <div class="a-input">
    <label class="a-input__label text-small gray">{{ label }}</label>
    <input
      type="text"
      class="a-input__input"
      :placeholder="placeholder"
      :maxlength="maxCount"
      @input="checkCount($event.target.value)"
    >
    <div class="a-input__info">
      <span class="a-input__error text-small red"></span>
      <div class="a-input__counter text-small gray">
        {{ count }} / {{ maxCount }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  label: { type: String, default: 'Введите значение' },
  placeholder: { type: String, default: 'Введите значение' },
  maxCount: { type: Number, default: 100 },
})

const count = ref(0);

const checkCount = (value) => {
  count.value = value.length;
}
</script>

<style>
@import './a-input.scss';
</style>