<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SHeader from './components/sections/s-header/index.vue'
</script>

<template>
  <SHeader />
  <RouterLink to="/">Home</RouterLink>

  <RouterView />
</template>

<style scoped>

</style>
