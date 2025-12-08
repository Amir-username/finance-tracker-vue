import { defineStore } from "pinia";
import type { Expense } from "../models/Expense";
import { ref } from "vue";

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

export const useExpensesStore = defineStore("expenses", () => {
  const expensesState = ref<Expense[]>(expenses);

  const addExpense = (expense: Expense) => {
    expensesState.value = [...expensesState.value, expense];
  };

  const removeExpense = (expenseID: number) => {
    expensesState.value = expensesState.value.filter((ex) => {
      return ex.id !== expenseID;
    });
  };

  const updateExpense = (expenseID: number, newExpense: Expense) => {
    const index = expensesState.value.findIndex((e) => e.id === expenseID);

    if (index !== -1) {
      expensesState.value[index] = {
        ...expensesState.value[index],
        ...newExpense,
      };
    }
  };

  return { expensesState, addExpense, removeExpense, updateExpense };
});
