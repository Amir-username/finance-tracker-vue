<script setup lang="ts">
import { useExpensesStore } from "../stores/expensesStore";

const { id } = defineProps<{ id: string }>();

const expenseStore = useExpensesStore();

const expense = expenseStore.getExpenseByID(Number(id));

</script>

<template>
  <section>
    <h1>{{ expense?.category }}</h1>
  </section>
</template>

<style scoped></style>
