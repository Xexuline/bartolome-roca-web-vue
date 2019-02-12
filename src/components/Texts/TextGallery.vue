<template>
  <article>
    <div class="article-container">
      <h2 class="h2-article-title">{{ title }}</h2>
      <p>
        Consequat et est non laboris cupidatat ut deserunt anim nostrud aliqua
        officia tempor do anim. Labore aliqua reprehenderit eiusmod nisi qui
        enim consequat est eu exercitation nulla consectetur. Aliqua excepteur
        est enim voluptate cillum dolor exercitation aliqua dolor ea id eiusmod.
        Consectetur officia pariatur ea nostrud ea proident excepteur veniam
        cillum in. Ea veniam aute qui dolor consectetur. Aliqua labore pariatur
        deserunt dolor deserunt.
      </p>
      <app-gallery-full></app-gallery-full>
    </div>
  </article>
</template>

<script>
import Tcs from "../../components/Gallery.vue";

export default {
  components: {
    "app-gallery-full": Tcs
  },
  props: {
    title: String
  }
};
</script>

<style>
@import "../../assets/css/components/textgallery.css";
</style>
