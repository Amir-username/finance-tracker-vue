<script setup lang="ts">
import { useExpensesStore } from "../stores/expensesStore";
import ExpenseItem from "./ExpenseItem.vue";

const expensesStore = useExpensesStore();
</script>

<template>
  <section>
    <h3>expenses</h3>
    <ul>
      <ExpenseItem
        v-for="expense in expensesStore.expensesState"
        :expense="expense"
        :key="expense.id"
      />
    </ul>
  </section>
</template>

<style scoped>
h3 {
  text-align: center;
}
ul {
  list-style: none;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(
      200px,
      1fr
    ) minmax(200px, 1fr);
  gap: 0.5rem;
  margin: 0;
  padding: 2rem 4rem;
}
</style>
