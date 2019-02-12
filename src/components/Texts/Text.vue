<template>
  <article>
    <div class="article-container">
      <h2 class="h2-article-title">{{ title }}</h2>
      <app-home-text></app-home-text>
    </div>
  </article>
</template>

<script>
import WebIndex from "@/views/WebIndex.vue";

export default {
  name: "app-text",
  props: {
    title: String
  },
  components: {
    "app-home-text": WebIndex
  }
};
</script>

<style>
@import "../../assets/css/components/text.css";
</style>
