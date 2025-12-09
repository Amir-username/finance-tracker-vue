<script setup lang="ts">
import { onMounted, ref } from "vue";
import AddExpenseForm from "./components/AddExpenseForm.vue";
import ExpenseList from "./components/ExpenseList.vue";
import Header from "./components/Header.vue";

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

const isAddFormOpen = ref(false);
</script>

<template>
  <Header />
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

  
</style>
