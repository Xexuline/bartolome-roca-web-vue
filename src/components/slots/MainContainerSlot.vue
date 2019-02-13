<template>
  <div class="container-root">
    <app-navigation />
    <div class="container-web">
      <app-section :route="checkRoute()" />
      <slot></slot>
      <app-footer />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Section from "@/components/Section.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    "app-navigation": Navbar,
    "app-section": Section,
    "app-footer": Footer
  },
  methods: {
    checkRoute() {
      return this.$route.name;
    }
  }
};
</script>

<style>

</style>
