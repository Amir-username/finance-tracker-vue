<script setup lang="ts">
import type { Expense } from "../models/Expense";
import ExpenseItem from "./ExpenseItem.vue";

const expenses: Expense[] = [
  {
    id: 1,
    amount: 20,
    date: Date.now(),
    category: "food",
  },
  {
    id: 2,
    amount: 1,
    date: Date.now(),
    category: "train",
  },
  {
    id: 3,
    amount: 5,
    date: Date.now(),
    category: "coffie",
  },
  {
    id: 4,
    amount: 150,
    date: Date.now(),
    category: "books",
  },
];
</script>

<template>
  <section>
    <h3>expenses</h3>
    <ul>
      <ExpenseItem v-for="expense in expenses" :expense="expense" />
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
    grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);
    gap: 0.5rem;
    margin: 0;
    padding: 2rem 4rem;
}
</style>
