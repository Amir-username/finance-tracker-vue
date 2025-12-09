<script setup lang="ts">
import { onMounted, ref } from "vue";
import AddExpenseForm from "./components/AddExpenseForm.vue";
import ExpenseList from "./components/ExpenseList.vue";
import { useBalanceStore } from "./stores/balanceStore";

onMounted(() => {
  const localBalance = localStorage.getItem("balance");
  
  if (!localBalance) {
    localStorage.setItem("balance", JSON.stringify(0));
  }
});

const balanceStore = useBalanceStore();

const isAddFormOpen = ref(false);
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
    <div class="expenses-list-header">
      <h3>expenses</h3>
      <button @click="isAddFormOpen = !isAddFormOpen">add</button>
    </div>
    <ExpenseList />
    <AddExpenseForm v-show="isAddFormOpen" v-model="isAddFormOpen" />
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

h3 {
  text-align: center;
}

.expenses-list-header {
  display: flex;
  gap: 2ch;
  justify-self: center;
  align-self: center;
}

main {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
</style>
