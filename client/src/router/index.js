import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CheckRegistration from "../views/CheckRegistration.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/check",
        name: "Check",
        component: CheckRegistration,
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;