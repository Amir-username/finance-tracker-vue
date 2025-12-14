<script setup lang="ts">
import Header from "./components/Header.vue";
import type { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
