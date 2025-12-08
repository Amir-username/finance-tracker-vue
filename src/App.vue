<script setup lang="ts">
import ExpenseList from "./components/ExpenseList.vue";
</script>

<template>
  <header>
    <nav>
      <h1>Finance Tracker</h1>
      <h3>balance: 0$</h3>
    </nav>
  </header>
  <main>
    <ExpenseList />
  </main>
  <footer></footer>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  align-items: baseline;
}

h1, h3 {
  margin: 0;
}
</style>
