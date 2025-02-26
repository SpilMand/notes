<template>
  <div class="m-note">
    <div class="m-note__head">
      <h4 class="m-note__title">{{ data.title }}</h4>
      <img src="@/assets/images/triangle.svg" class="m-note__triangle">
    </div>
    <p class="m-note__text">{{ data.content }}</p>
    <div class="m-note__actions">
      <aButton label="Удалить" icon="src/assets/images/close.svg" @click="clickDelete" />
    </div>
  </div>
</template>

<script setup lang="ts">
import aButton from '@/components/atoms/a-button/a-button.vue';
import { deleteNote } from '@/api/api';

const emit = defineEmits(['refreshNotes']);

const props = defineProps({
  data: { type: Object, default: () => ({}) }
})

const clickDelete = async () => {
  await deleteNote(props.data.id, localStorage.getItem('accessToken'));
  emit('refreshNotes');
}
</script>

<style>
@import './m-note.scss';
</style>