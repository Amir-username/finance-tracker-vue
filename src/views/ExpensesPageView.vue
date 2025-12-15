<script setup lang="ts">
import ExpenseItem from "../components/ExpenseItem.vue";
import { useExpensesStore } from "../stores/expensesStore";

const expensesStore = useExpensesStore();
</script>

<template>
  <!-- <section class="filter-group">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#434343"
    >
      <path
        d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"
      />
    </svg>
    <select name="filter" id="filter">
      <option value="category">category</option>
      <option value="category">amount</option>
      <option value="category">category</option>
    </select>
  </section> -->
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

.filter-group {
  display: flex;
  gap: 1ch;
  align-items: center;
  margin: 1.5rem 2.5rem;
}

h4 {
  color: gray;
}
</style>
