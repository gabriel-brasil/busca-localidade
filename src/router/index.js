import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SigninView from "../views/SigninView.vue";
import FavoriteView from "../views/FavoriteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/conectar",
    name: "conectar",
    component: LoginView,
  },
  {
    path: "/cadastrar",
    name: "cadastrar",
    component: SigninView,
  },
  {
    path: "/favoritos",
    name: "favoritos",
    component: FavoriteView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
