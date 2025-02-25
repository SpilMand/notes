<template>
  <section class="s-notes">
    <div v-if="notes" class="s-notes__content">
      <mNote v-for="(note, index) in notes.data" :key="index" :data="note" />
    </div>
    <aButton class="s-notes__add" icon="src/assets/images/add.svg" @click="popupStore.closeOpen()" />
    <sPopup
      class="s-notes__popup"
      v-show="popupStore.isOpened"
      title="Добавление заметки"
    >
      <mPopupNote @refreshNotes="refreshNotes" />
    </sPopup>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import mNote from '@/components/molecules/m-note/m-note.vue';
import aButton from '@/components/atoms/a-button/a-button.vue';
import sPopup from '../s-popup/s-popup.vue';
import mPopupNote from '@/components/molecules/m-popup-note/m-popup-note.vue';
import { getNotes } from '@/api/api';
import { useAuthStore } from '@/stores/auth';
import { usePopupStore } from '@/stores/popup';

const authStore = useAuthStore();
const popupStore = usePopupStore();

const notes = ref();

const refreshNotes = async() => {
  notes.value = await getNotes(authStore.accessToken);
  console.log(notes.value);
}

onMounted(() => {
  refreshNotes();
})
</script>

<style>
@import './s-notes.scss';
</style>