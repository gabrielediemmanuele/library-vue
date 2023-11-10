import { createRouter, createWebHistory } from "vue-router";

/* importare le pagine  */
import HomePage from "./components/pages/HomePage.vue";
import LibraryPage from "./components/pages/LibraryPage.vue";
import BookPage from "./components/pages/BookPage.vue";

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
    {
      path: "/library/:id",
      name: "book-detail",
      component: BookPage,
    },
  ],
});

export { router };
