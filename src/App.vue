<script setup lang="ts">
import { onMounted } from "vue";
import Header from "./components/Header.vue";
import type { RouterView } from "vue-router";

function initialBalance() {
  const localBalance = localStorage.getItem("balance");
  if (!localBalance) {
    localStorage.setItem("balance", JSON.stringify(0));
  }
}

function initialExpenses() {
  const localExpenses = localStorage.getItem("expenses");
  if (!localExpenses) {
    localStorage.setItem("expenses", JSON.stringify([]));
  }
}

onMounted(() => {
  initialBalance();
  initialExpenses();
});

</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped>
</style>
