import { createMemoryHistory, createRouter } from "vue-router";
import Homepage from "../views/Homepage.vue";

const routes = [
  {
    path: "/",
    name: 'homepage',
    component: Homepage,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
