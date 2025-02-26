<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import sHeader from './components/sections/s-header/s-header.vue' 
</script>

<template>
    <div class="container">
  <sHeader />
  <!-- <RouterLink to="/">Home</RouterLink> -->

    <RouterView />
  </div>
</template>

<style scoped>

</style>
