import { defineStore } from "pinia";
import type { Expense } from "../models/Expense";
import { ref } from "vue";

export const useExpensesStore = defineStore("expenses", () => {
  const expensesState = ref<Expense[] | undefined>(undefined);

  const localExpenses = localStorage.getItem("expenses");

  if (localExpenses) {
    expensesState.value = JSON.parse(localExpenses);
  }

  const addExpense = (expense: Expense) => {
    if (expensesState.value)
      expensesState.value = [...expensesState.value, expense];
    localStorage.setItem("expenses", JSON.stringify(expensesState.value));
  };

  const removeExpense = (expenseID: number) => {
    if (expensesState.value) {
      expensesState.value = expensesState.value.filter((ex) => {
        return ex.id !== expenseID;
      });
      localStorage.setItem("expenses", JSON.stringify(expensesState.value));
    }
  };

  const updateExpense = (expenseID: number, newExpense: Expense) => {
    if (expensesState.value) {
      const index = expensesState.value.findIndex((e) => e.id === expenseID);

      if (index !== -1) {
        expensesState.value[index] = {
          ...expensesState.value[index],
          ...newExpense,
        };
      }
      localStorage.setItem("expenses", JSON.stringify(expensesState.value));
    }
  };

  return { expensesState, addExpense, removeExpense, updateExpense };
});
