<template>
  <sMain v-if="!authStore.accessToken" />
  <sNotes v-else />
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import sMain from '@/components/sections/s-main/s-main.vue';
import sNotes from '@/components/sections/s-notes/s-notes.vue';

const authStore = useAuthStore();

</script>