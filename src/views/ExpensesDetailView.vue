<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Expense } from "../models/Expense";
import { useExpensesStore } from "../stores/expensesStore";

const { id } = defineProps<{ id: string }>();

const expenseStore = useExpensesStore();

const expense = expenseStore.getExpenseByID(Number(id));

const router = useRouter();

const handleDeleteExpense = (expenseID: number) => {
  expenseStore.removeExpense(expenseID);
  router.push("/");
};

const handleUpdateExpense = (expenseID: number, expense: Expense) => {
  const newExpense: Expense = {
    id: expense.id,
    category: expense.category,
    date: new Date(),
    amount: expense.amount + 10,
  };

  expenseStore.updateExpense(expenseID, newExpense);
  router.push("/");
};
</script>

<template>
  <section class="expense-detail-card">
    <h1 class="amount">{{ expense?.amount }}$</h1>
    <h3 class="category">{{ expense?.category }}</h3>
    <h5 class="date">{{ expense?.date.toString().slice(0, 10) }}</h5>
    <p class="description">{{ expense?.description }}</p>
    <div class="button-group">
      <button
        @click="handleUpdateExpense(expense!.id, expense!)"
        class="btn-update"
      >
        update
      </button>
      <button @click="handleDeleteExpense(expense!.id)" class="btn-delete">
        delete
      </button>
    </div>
  </section>
</template>

<style scoped>
.expense-detail-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--primary);
  margin: 3rem 1rem;
  border-radius: 8px;
}

.amount {
  font-size: 3rem;
  color: hsl(0, 0%, 18%);
}

.category {
  background-color: var(--primary);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  color: white;
  width: fit-content;
  text-align: center;
}

.date {
  color: gray;
  font-size: 1rem;
}

.description {
  font-size: 1.2rem;
  text-transform: capitalize;
}

.button-group {
  display: flex;
  gap: 1ch;
  align-self: flex-end;
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
