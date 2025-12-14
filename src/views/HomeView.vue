<script setup lang="ts">
import { onMounted, ref } from "vue";
import AddExpenseForm from "../components/AddExpenseForm.vue";
import ExpenseList from "../components/ExpenseList.vue";

const isAddFormOpen = ref(false);

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
  <h3>expenses</h3>
  <button class="btn-add-expense" @click="isAddFormOpen = !isAddFormOpen">
    + add expense
  </button>
  <ExpenseList />
  <AddExpenseForm v-show="isAddFormOpen" v-model="isAddFormOpen" />
</template>

<style scoped>
h3 {
  padding: 2rem 1rem;
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
}

.btn-add-expense {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: 1rem;
  border-radius: 32px;
  background-color: var(--primary);
  color: white;
  border: none;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.1ch;
  font-weight: 600;
}
</style>
