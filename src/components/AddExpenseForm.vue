<script setup lang="ts">
import { reactive } from "vue";
import { useExpensesStore } from "../stores/expensesStore";
import type { Expense } from "../models/Expense";
import { useBalanceStore } from "../stores/balanceStore";

defineProps<{ modelValue: boolean }>();

const emit = defineEmits(["update:modelValue"]);

const close = () => {
  emit("update:modelValue", false);
};

defineExpose({ close });

const formData = reactive<{
  category?: string;
  amount?: number;
  description?: string;
}>({});

const expensesStore = useExpensesStore();

const balanceStore = useBalanceStore();

const handleSubmit = () => {
  if (
    formData.amount &&
    formData.category &&
    formData.amount < balanceStore.balance!
  ) {
    const newExpense: Expense = {
      id: Date.now(),
      amount: formData.amount,
      category: formData.category.trim(),
      date: new Date(),
      description: formData.description?.trim(),
    };

    expensesStore.addExpense(newExpense);
    balanceStore.spend(newExpense.amount);

    formData.category = undefined;
    formData.amount = undefined;
    formData.description = undefined;

    emit("update:modelValue", false);
  }
};
</script>

<template>
  <div @click.self="close" class="overlay">
    <form @submit.prevent="handleSubmit">
      <h2>add a new expense</h2>
      <div class="input-group">
        <label for="category">category</label>
        <input id="category" type="text" v-model="formData.category" />
      </div>
      <div class="input-group">
        <label for="amount">amount</label>
        <input id="amount" type="number" v-model="formData.amount" />
      </div>
      <div class="input-group">
        <label for="description">description</label>
        <input id="description" type="text" v-model="formData.description" />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
}

form {
  width: 350px;
  display: grid;
  gap: 1rem;
  padding: 2.5rem 2rem;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 12px rgb(107, 107, 107);
}

h2 {
  text-align: center;
  margin: 0;
}

.input-group {
  display: grid;
  gap: 1ch;
}

input {
  padding: 0.3rem;
}

button {
  padding: 0.5rem;
  border: 1px gray solid;
  border-radius: 8px;
  background-color: rgb(239, 239, 239);
  cursor: pointer;
}
</style>
