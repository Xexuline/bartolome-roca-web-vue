<template>
  <div class="section-title">
    <section>
        <img :src="require('../assets/images/web/section/'+ image +'.jpeg')" class="image-section" alt="Inicio Imagen">
        <div class="container-text-section">
          <h1>{{ title }}</h1>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app-section',
  props: {
    title: String,
    image: String
  }
}
</script>

<style>
  @import "../assets/css/components/section.css";
</style>