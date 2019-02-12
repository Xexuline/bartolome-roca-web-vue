<template>
  <div class="container-home">
    <div class="container-home-author">
      <div class="container-home-author-photo">
        <img
          src="../assets/images/home/bartolome.jpg"
          alt="Bartolome Roca"
          class="image-responsive"
        />
      </div>
      <div class="container-home-author-text">
        <div class="container-home-author-text-name">
          BARTOLOMÉ ROCA
        </div>
        <div class="container-home-author-text-artist">
          Artísta plástico
        </div>
      </div>
    </div>
    <div class="container-home-button">
      <router-link to="/web" class="container-home-button-enter"
        >Entrar</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
/* ERROR AL IMPORTAR YA QUE ME PASA ESTILOS DE ENLACE A WEB.VUE */
/* @import "../assets/css/pages/home.css"; */
</style>
