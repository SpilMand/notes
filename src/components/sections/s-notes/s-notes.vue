<template>
  <section class="s-notes">
    <div v-if="notes" class="s-notes__content">
      <mNote v-for="(note, index) in notes.data" :key="index" :data="note" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import mNote from '@/components/molecules/m-note/m-note.vue';
import { getNotes } from '@/api/api';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const notes = ref();

onMounted(async () => {
  notes.value = await getNotes(authStore.accessToken);
  
})
</script>

<style>
@import './s-notes.scss';
</style>