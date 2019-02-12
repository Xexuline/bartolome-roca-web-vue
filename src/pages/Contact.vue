<template>
  <div class="container-root">
    <app-navigation />
    <div class="container-web">
      <app-section title="Contacto" image="wall" />
      <app-text title="Contacto"></app-text>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Section from "@/components/Section.vue";
import Text from "@/components/Texts/Text.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contacto",
  components: {
    "app-navigation": Navbar,
    "app-section": Section,
    "app-text": Text,
    "app-footer": Footer
  }
};
</script>

<style>
@import "../assets/css/pages/contacto.css";
</style>
