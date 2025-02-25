<template>
  <div class="a-input">
    <label class="a-input__label text-small gray">{{ label }}</label>
    <div class="a-input__case">
      <input
        :type="(isPassword && isHidden) ? 'password' : 'text'"
        class="a-input__input"
        :placeholder="placeholder"
        :maxlength="maxCount"
        @input="enterText($event.target.value)"
      >
      <div v-if="isPassword" class="a-input__onoff">
        <img v-if="isHidden" src="@/assets/images/on-password.svg" @click="hideShow">
        <img v-else src="@/assets/images/off-password.svg" @click="hideShow">
      </div>
    </div>

    <div class="a-input__info">
      <span class="a-input__error text-small red"></span>
      <div class="a-input__counter text-small gray">
        {{ count }} / {{ maxCount }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits([
  'enterData'
])

const props = defineProps({
  label: { type: String, default: 'Введите значение' },
  placeholder: { type: String, default: 'Введите значение' },
  maxCount: { type: Number, default: 100 },
  isPassword: { type: Boolean, default: false },
})

const count = ref(0);
const isHidden = ref(false);

const enterText = (value) => {
  checkCount(value);
  emit('enterData', value)
}

const checkCount = (value) => {
  count.value = value.length;
}

const hideShow = () => {
  isHidden.value = !isHidden.value;
}

onMounted(() => {
  if (props.isPassword) {
    isHidden.value = true;
  }
})
</script>

<style>
@import './a-input.scss';
</style>