<script setup lang="ts">
import { useExpensesStore } from "../stores/expensesStore";
import ExpenseItem from "./ExpenseItem.vue";

const expenseStore = useExpensesStore();
</script>

<template>
  <section>
    <ul>
      <ExpenseItem
        v-for="expense in expenseStore.expensesState"
        :expense="expense"
        :key="expense.id"
      />
    </ul>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  overflow: scroll;
  gap: 0.5rem;
  margin: 0;
  padding: 2rem 1rem;
}
</style>
