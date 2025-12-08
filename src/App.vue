<script setup lang="ts">
import ExpenseList from "./components/ExpenseList.vue";
import { useBalanceStore } from "./stores/balanceStore";

const balanceStore = useBalanceStore();
</script>

<template>
  <header>
    <nav>
      <div class="nav-group">
        <h1>Finance Tracker</h1>
        <a href="#">dashboard</a>
      </div>
      <h3>
        balance <span> {{ balanceStore.balance }}$ </span>
      </h3>
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

.nav-group {
  display: flex;
  gap: 4rem;
  align-items: center;
}

h1,
h3 {
  margin: 0;
  color: rgb(89, 88, 88);
  text-transform: capitalize;
}

span {
  font-size: 2.5rem;
  color: black;
}

a {
  text-decoration: none;
  color: grey;
}
</style>
