<template>
  <div class="container-root">
    <app-navigation />
    <div class="container-web">
      <app-section :route="'galeria'" />
      <app-text-gallery title="Galería"></app-text-gallery>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Section from "@/components/Section.vue";
import TextGallery from "@/components/Texts/TextGallery.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    "app-navigation": Navbar,
    "app-section": Section,
    "app-text-gallery": TextGallery,
    "app-footer": Footer
  }
};
</script>

<style>
@import "../assets/css/components/gallery.css";
</style>
