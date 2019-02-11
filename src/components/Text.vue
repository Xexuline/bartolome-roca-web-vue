<template>
  <article>
    <div class="article-container">
      <h2 class="h2-article-title">{{ title }}</h2>

    </div>
  </article>
</template>

<script>
  import Lorem from "@/components/Lorem.vue";

  export default {
    name: 'app-text',
    props: {
      title: String
    },
    components: {
      "app-lorem": Lorem
    }
    
  }
</script>

<style>
  @import "../assets/css/components/text.css"; 
</style>