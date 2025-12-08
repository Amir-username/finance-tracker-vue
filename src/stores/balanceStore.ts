import { defineStore } from "pinia";

export const useBalanceStore = defineStore("balance", {
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
