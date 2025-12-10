import { defineStore } from "pinia";
import { ref } from "vue";

function saveBalance(balance: number) {
  localStorage.setItem("balance", JSON.stringify(balance));
}

export const useBalanceStore = defineStore("balance", () => {
  const balanceStorage = localStorage.getItem("balance");

  const balance = ref<number>(0);

  if (balanceStorage) {
    balance.value = JSON.parse(balanceStorage);
  }

  const add = (amount: number) => {
    console.log("sdsdfdfg");
    balance.value += amount;
    saveBalance(balance.value);
    console.log(balanceStorage);
  };

  const spend = (amount: number) => {
    balance.value -= amount;
    saveBalance(balance.value);
  };

  return {
    balance,
    add,
    spend,
  };
});
