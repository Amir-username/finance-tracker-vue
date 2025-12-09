import { defineStore } from "pinia";
import { ref } from "vue";

/*export const useBalanceStore = defineStore("balance", {
  state: () => {
    return { balance: 10 };
  },
  actions: {
    add(amount: number) {
      this.balance = this.balance + amount;
    },
    spend(amount: number) {
      this.balance = this.balance - amount;
    },
  },
});
*/

export const useBalanceStore = defineStore("balance", () => {
  const balanceStorage = localStorage.getItem("balance");

  const balance = ref<number | undefined>(undefined);

  if (balanceStorage) {
    balance.value = JSON.parse(balanceStorage);
  }

  const add = (amount: number) => {
    if (balance.value) balance.value += amount;
    localStorage.setItem("balance", JSON.stringify(balance.value));
  };

  const spend = (amount: number) => {
    if (balance.value) balance.value -= amount;
    localStorage.setItem("balance", JSON.stringify(balance.value));
  };

  return {
    balance,
    add,
    spend,
  };
});
