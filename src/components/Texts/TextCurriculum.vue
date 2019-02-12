<template>
  <article>
    <div class="article-container">
      <h2 class="h2-article-title">{{ title }}</h2>
      <app-home-text></app-home-text>
    </div>
  </article>
</template>

<script>
import CV from "@/views/Curriculum.vue";

export default {
  name: "app-text",
  props: {
    title: String
  },
  components: {
    "app-home-text": CV
  }
};
</script>

<style>
@import "../../assets/css/components/text.css";
</style>
