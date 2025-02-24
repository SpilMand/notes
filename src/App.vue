<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SHeader from './components/sections/s-header/s-header.vue'
</script>

<template>
    <div class="container">
  <SHeader />
  <!-- <RouterLink to="/">Home</RouterLink> -->

    <RouterView />
  </div>
</template>

<style scoped>

</style>
