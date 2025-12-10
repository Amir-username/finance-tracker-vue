<script setup lang="ts">
import { ref } from "vue";
import { useBalanceStore } from "../stores/balanceStore";

const addBalanceInput = ref<number>();

const isAddBalanceFormOpen = ref(false);

const balanceStore = useBalanceStore();

function handleAddBalanceSubmit() {
  console.log(addBalanceInput.value);
  if (addBalanceInput.value) balanceStore.add(addBalanceInput.value);
}
</script>

<template>
  <header>
    <nav>
      <div class="nav-group">
        <h1 class="brand">Finance Tracker</h1>
      </div>
      <div class="balance-group">
        <h3 class="balance">
          balance
          <span class="balance-amount"> {{ balanceStore.balance }}$ </span>
        </h3>
        <button
          class="btn-add-balance"
          v-if="isAddBalanceFormOpen === false"
          @click="isAddBalanceFormOpen = true"
        >
          +
        </button>
        <button
          class="btn-remove-balance"
          v-else
          @click="isAddBalanceFormOpen = false"
        >
          -
        </button>

        <form
          v-show="isAddBalanceFormOpen"
          @submit.prevent="handleAddBalanceSubmit"
        >
          <input
            placeholder="enter balance number"
            type="number"
            v-model="addBalanceInput"
          />
        </form>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.brand {
  color: var(--primary);
  padding: 1rem;
}

.balance-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  padding: 1rem;
}

.btn-add-balance,
.btn-remove-balance {
  border: none;
  background-color: var(--primary);
  color: white;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  font-size: 1rem;
}

.balance {
  color: hsl(0, 0%, 46%);
  text-transform: capitalize;
}

.balance-amount {
  font-size: 2rem;
  color: hsl(0, 0%, 27%);
}

input {
  padding: 0.5rem;
  border: none;
}
</style>
