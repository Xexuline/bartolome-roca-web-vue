<template>
  <div id="cards">
      <div 
        v-for="(card, index) in cards" :key="index"
        class="card" :title="card.cardtitle">
          <h4>{{ card.title }}</h4>
          <img :src="card.image" :alt="card.altimg" class="card-i">
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
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 1', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 2', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 3', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 4', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 5', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 6', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 7', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 8', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 9', buttontext: 'text', buttongallery: 'text' },
          { cardtitle: 'Título tarjeta', title: 'Título tarjeta', image: 'https://dummyimage.com/390x200/000/0011ff.jpg', altimg: 'Tarjeta 10', buttontext: 'text', buttongallery: 'text' },
        ]
      }
    },
  }
</script>

<style>
  @import "../assets/css/components/gallery.css"; 
</style>