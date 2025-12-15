<script setup lang="ts">
import ExpenseItem from "../components/ExpenseItem.vue";
import { useExpensesStore } from "../stores/expensesStore";

const expensesStore = useExpensesStore();
</script>

<template>
    <ul class="expenses-list">
      <ExpenseItem
        v-for="expense in expensesStore.expensesState"
        :key="expense.id"
        :expense="expense"
      />
    </ul>
</template>

<style scoped>
.expenses-list {
  display: grid;
  gap: 1rem;
}
</style>
