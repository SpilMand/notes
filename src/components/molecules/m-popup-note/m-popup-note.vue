<template>
  <div class="m-popup-note">
    <aInput label="Название заметки" placeholder="Введите название" :maxCount="64" @enterData="enterTitle" />
    <aInput label="Текст заметки" placeholder="Введите текст" :isArea="true" :maxCount="255" @enterData="enterContent" />
    <div class="m-popup-note__actions">
      <aButton label="Добавить" @click="addNote" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import aInput from '@/components/atoms/a-input/a-input.vue';
import aButton from '@/components/atoms/a-button/a-button.vue';
import { createNote } from '@/api/api';
import { usePopupStore } from '@/stores/popup';

const emit = defineEmits(['refreshNotes']);

const store = usePopupStore();

const data = ({
  title: '',
  content: '',
})

const enterTitle = (value) => {
  data.title = value;
}
const enterContent = (value) => {
  data.content = value;
}

const addNote = async () => {
  await createNote(data, localStorage.getItem('accessToken'));
  store.closeOpen();
  emit('refreshNotes');
}
</script>

<style>
@import './m-popup-note.scss';
</style>