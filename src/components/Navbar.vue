<template>
  <header>
    <div class="header-container">
      <input type="checkbox" id="burger-shower" class="burger-shower" />
      <div id="content-logo">
        <label for="burger-shower" id="burger-toggle">&#9776;</label>
        <div id="logo-name">BARTOLOMÉ ROCA</div>
      </div>
      <nav>
        <ul>
          <li
            v-for="navlink in navlinks"
            :key="navlink.title"
            :index="navlink.title"
          >
            <router-link :to="navlink.link"> {{ navlink.title }} </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-navbar",
  data() {
    return {
      navlinks: [
        { link: "web", title: "Inicio" },
        { link: "curriculum", title: "Curriculum" },
        { link: "galeria", title: "Galería" },
        { link: "contacto", title: "Contacto" }
      ]
    };
  }
};
</script>

<style scoped>
@import "../assets/css/components/navbar.css";
</style>
