import { createWebHistory, createRouter } from "vue-router";
import Homepage from "../views/HomeView.vue";
import ExpensesDetail from "../views/ExpensesDetailView.vue";
import ExpensesView from "../views/ExpensesPageView.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Homepage,
  },
  {
    path: "/expenses/:id",
    name: "expenses-detail",
    component: ExpensesDetail,
    props: true,
  },
  {
    path: "/expenses",
    name: "expenses",
    component: ExpensesView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
