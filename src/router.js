import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "./pages/LandingPage.vue";
import ShowDetails from "./pages/ShowDetails.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/villa-party" },
    // { path: "/:id", redirect: "/villa-party/:id" },
    { path: "/villa-party", component: LandingPage },
    {
      path: "/villa-party/:id",
      component: ShowDetails,
    },
    { path: "/notfound{.*}", component: NotFound },
  ],
});

export default router;
