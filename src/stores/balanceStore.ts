import { defineStore } from "pinia";
import { ref } from "vue";

function saveBalance(balance: number) {
  localStorage.setItem("balance", JSON.stringify(balance));
}

export const useBalanceStore = defineStore("balance", () => {
  const balanceStorage = localStorage.getItem("balance");

  const balance = ref<number | undefined>(undefined);

  if (balanceStorage) {
    balance.value = JSON.parse(balanceStorage);
  }

  const add = (amount: number) => {
    if (balance.value) {
      balance.value += amount;
      saveBalance(balance.value);
    }
  };

  const spend = (amount: number) => {
    if (balance.value) {
      balance.value -= amount;
      saveBalance(balance.value);
    }
  };

  return {
    balance,
    add,
    spend,
  };
});
