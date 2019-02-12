<template>
  <article>
    <div class="article-container">
      <h2 class="h2-article-title">{{ title }}</h2>
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "app-article-slot",
  props: {
    title: String
  },
}
</script>
<style>
@import "../../assets/css/components/text.css";
</style>


