<script setup lang="ts">
import type { Expense } from "../models/Expense";
import { useExpensesStore } from "../stores/expensesStore";

const { expense } = defineProps<{
  expense: Expense;
}>();

const { removeExpense, updateExpense } = useExpensesStore();

const handleDeleteExpense = (expenseID: number) => {
  removeExpense(expenseID);
};

const handleUpdateExpense = (expenseID: number, expense: Expense) => {
  const newExpense: Expense = {
    id: expense.id,
    category: expense.category,
    date: new Date(),
    amount: expense.amount + 10,
  };

  updateExpense(expenseID, newExpense);
};
</script>

<template>
  <li>
    <article>
      <h4>{{ expense.category }}</h4>
      <p>{{ expense.date.toString().slice(0, 10) }}</p>
      <h2>{{ expense.amount }}$</h2>
      <div class="button-group">
        <button @click="handleDeleteExpense(expense.id)" class="btn-delete">
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

li {
  flex-shrink: 0;
  width: 90%;
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

button {
  padding: 0.4rem 0.6rem;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  background-color: rgb(225, 242, 255);
  text-transform: capitalize;
}

.btn-update {
  color: hsl(0, 0%, 19%);
}

.btn-delete {
  color: rgb(110, 24, 9);
}
</style>
