import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Course from "./views/Course.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/course",
    name: "Course",
    component: Course,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;