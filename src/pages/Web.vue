<template>
    <app-navigation />
</template>

<script>
  import Navbar from "../components/Navbar.vue";

  export default {
    name: "Web",
    components: {
      'app-navigation': Navbar
    }
  };
</script>

<style scoped>
  @import "../assets/css/pages/web.css";
</style>