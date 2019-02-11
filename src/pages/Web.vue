<template>
  <div>
    <navigation />
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.Vue';

  export default {
    name: "Web",
    components: {
      navigation: Navigation,
    }
  };
</script>

<style scoped>
  @import "../assets/css/pages/web.css";
</style>