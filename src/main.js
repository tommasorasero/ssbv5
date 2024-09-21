// main.ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "../public/globals.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home.vue";
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./views/team.vue"),
    },
    {
      path: "/consigli",
      name: "consigli",
      component: () => import("./views/consigli.vue"),
    },
    {
      path: "/testview",
      name: "testview",
      component: () => import("./views/testview.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue"),
    },
  ],
});

app.use(ElementPlus);
app.use(router);
app.mount("#app");
