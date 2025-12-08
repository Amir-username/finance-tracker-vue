import { defineStore } from "pinia";

export const useBalanceStore = defineStore("balance", {
  state: () => {
    return { balance: 0 };
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
