import { createRouter, createWebHistory } from "vue-router";

/* importare le pagine  */
import HomePage from "./pages/HomePage.vue";
import LibraryPage from "./pages/LibraryPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/library",
      name: "library",
      component: LibraryPage,
    },
  ],
});

export { router };
