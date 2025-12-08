<script setup lang="ts">
import type { Expense } from "../models/Expense";
import { useExpensesStore } from "../stores/expensesStore";

const props = defineProps<{
  expense: Expense;
}>();

const expensesStore = useExpensesStore();

const handleDeleteExpense = (expenseID: number) => {
  expensesStore.removeExpense(expenseID);
};

const handleUpdateExpense = (expenseID: number, expense: Expense) => {
  const newExpense: Expense = {
    id: expense.id,
    category: expense.category,
    date: Date.now(),
    amount: expense.amount + 10,
  };

  expensesStore.updateExpense(expenseID, newExpense);
};
</script>

<template>
  <li>
    <article>
      <h4>{{ props.expense.category }}</h4>
      <p>{{ props.expense.date }}</p>
      <h2>{{ props.expense.amount }}$</h2>
      <div class="button-group">
        <button
          @click="handleDeleteExpense(props.expense.id)"
          class="btn-delete"
        >
          delete
        </button>
        <button
          @click="handleUpdateExpense(expense.id, expense)"
          class="btn-update"
        >
          update
        </button>
      </div>
    </article>
  </li>
</template>

<style scoped>
article {
  border: 1px solid gainsboro;
  border-radius: 8px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

.button-group {
  display: flex;
  gap: 1ch;
}
</style>
