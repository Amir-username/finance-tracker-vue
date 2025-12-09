<script setup lang="ts">
import { ref } from "vue";
import { useBalanceStore } from "../stores/balanceStore";

const addBalanceInput = ref<number>();

const isAddBalanceFormOpen = ref(false);

const balanceStore = useBalanceStore();

function handleAddBalanceSubmit() {
  if (addBalanceInput.value) balanceStore.add(addBalanceInput.value);
}
</script>

<template>
  <header>
    <nav>
      <div class="nav-group">
        <h1>Finance Tracker</h1>
        <a href="#">dashboard</a>
      </div>
      <div class="balance-group">
        <h3>
          balance <span> {{ balanceStore.balance }}$ </span>
        </h3>
        <button
          v-if="isAddBalanceFormOpen === false"
          @click="isAddBalanceFormOpen = true"
        >
          +
        </button>
        <button v-else @click="isAddBalanceFormOpen = false">-</button>

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

</style>
