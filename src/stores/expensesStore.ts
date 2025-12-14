import { defineStore } from "pinia";
import type { Expense } from "../models/Expense";
import { ref } from "vue";

function saveExpenses(expenses: Expense[]) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

export const useExpensesStore = defineStore("expenses", () => {
  const expensesState = ref<Expense[] | undefined>();

  const localExpenses = localStorage.getItem("expenses");

  if (localExpenses) {
    expensesState.value = JSON.parse(localExpenses);
  }

  const addExpense = (expense: Expense) => {
    if (expensesState.value) {
      expensesState.value = [...expensesState.value, expense];
      saveExpenses(expensesState.value);
    }
  };

  const removeExpense = (expenseID: number) => {
    if (expensesState.value) {
      expensesState.value = expensesState.value.filter((ex) => {
        return ex.id !== expenseID;
      });
      saveExpenses(expensesState.value);
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
      saveExpenses(expensesState.value);
    }
  };

  const getExpenseByID = (expenseID: number): Expense | undefined => {
    let findedExpense: Expense | undefined = undefined;

    expensesState.value?.forEach((expense) => {
      if (expense.id === expenseID) {
        findedExpense = expense;
      }
    });

    return findedExpense;
  };

  return {
    expensesState,
    addExpense,
    removeExpense,
    updateExpense,
    getExpenseByID,
  };
});
