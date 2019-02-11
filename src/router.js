import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Web from "@/pages/Web.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/web",
      name: "web",
      component: Web
    }
  ]
});
