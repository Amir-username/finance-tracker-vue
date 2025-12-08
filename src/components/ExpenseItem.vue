<script setup lang="ts">
import type { Expense } from "../models/Expense";

const props = defineProps<{
  expense: Expense;
}>();
</script>

<template>
  <li>
    <article>
      <h4>{{ props.expense.category }}</h4>
      <p>{{ props.expense.date }}</p>
      <h2>{{ props.expense.amount }}$</h2>
    </article>
  </li>
</template>

<style scoped>
article {
  border: 1px solid gainsboro;
  border-radius: 8px;
  padding: 2rem 1rem;
}

h2,
h4 {
  margin: 0;
}

h4 {
  text-transform: capitalize;
  color: darkslategray;
}

h2 {
  font-size: 2rem;
}
</style>
