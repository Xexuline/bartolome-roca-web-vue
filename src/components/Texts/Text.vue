<template>
  <article-slot :title="title">
    <app-home-text></app-home-text>
  </article-slot>
</template>

<script>
import WebIndex from "@/views/WebIndex.vue";
import ArticleSlot from "@/components/slots/slotArticle.vue"

export default {
  name: "app-text",
  props: {
    title: String
  },
  components: {
    "app-home-text": WebIndex,
    ArticleSlot,
  }
};
</script>

<style>
@import "../../assets/css/components/text.css";
</style>
