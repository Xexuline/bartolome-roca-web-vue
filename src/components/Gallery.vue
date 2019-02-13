<template>
  <div id="cards">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      :title="card.cardtitle"
    >
      <h4>{{ card.title }}</h4>
      <img
        :src="require(`@/assets/images/sections/${card.image}.jpg`)"
        :alt="card.altimg"
        class="card-image"
      />
      <div class="botonera">
        <button>Texto</button>&nbsp;
        <button>Galería</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          cardtitle: "Abstracto",
          title: "Abstracto",
          image: "abstracto",
          altimg: "Abstracto",
          buttontext: "text",
          buttongallery: "text"
        },
        {
          cardtitle: "Actual",
          title: "Actual",
          image: "actual",
          altimg: "Actual",
          buttontext: "text",
          buttongallery: "text"
        },
        {
          cardtitle: "Exposiciones",
          title: "Exposiciones",
          image: "exposiciones",
          altimg: "Exposiciones",
          buttontext: "text",
          buttongallery: "text"
        },
        {
          cardtitle: "Figurativo",
          title: "Figurativo",
          image: "figurativo",
          altimg: "Figurativo",
          buttontext: "text",
          buttongallery: "text"
        },
        {
          cardtitle: "Pasión",
          title: "Pasión",
          image: "pasion",
          altimg: "Pasión",
          buttontext: "text",
          buttongallery: "text"
        },
        {
          cardtitle: "Restauración",
          title: "Restauración",
          image: "restauracion",
          altimg: "Restauración",
          buttontext: "text",
          buttongallery: "text"
        }
      ]
    };
  }
};
</script>

<style>
@import "../assets/css/components/gallery.css";
</style>
