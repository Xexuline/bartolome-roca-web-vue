import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Web from "@/pages/Web.vue";
import Curriculum from "@/pages/Curriculum.vue";
import Gallery from "@/pages/Gallery.vue";
import Contact from "@/pages/Contact.vue";

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
    },
    {
      path: "/curriculum",
      name: "curriculum",
      component: Curriculum
    },
    {
      path: "/galeria",
      name: "galeria",
      component: Gallery
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contact
    }
  ]
});
