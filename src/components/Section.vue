<template>
  <div class="section-title">
    <section>
      <img
        :src="
          require('../assets/images/web/section/' +
            this.selectImage(this.route).image +
            '.jpg')
        "
        class="image-section"
        alt="Inicio Imagen"
      />
      <div class="container-text-section">
        <h1>{{ this.selectImage(this.route).title }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "app-section",
  props: {
    route: String
    // title: String,
    // image: String
  },
  data() {
    return {
      image: "",
      title: "",
      images: {
        curriculum: { image: "curriculum", title: "Curriculum" },
        contacto: { image: "curriculum", title: "Contacto" },
        galeria: { image: "curriculum", title: "Galeria" },
        web: { image: "curriculum", title: "Web" }
      }
    };
  },
  methods: {
    selectImage(page) {
      return this.images[page];
    }
  }
};
</script>

<style>
@import "../assets/css/components/section.css";
</style>
