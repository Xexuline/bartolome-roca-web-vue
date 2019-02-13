<template>
  <Container>
    <app-text title="Contacto"></app-text>
  </Container>
</template>

<script>
import Text from "@/components/Texts/Text.vue";
import Container from "@/components/slots/MainContainerSlot.vue";

export default {
  name: "Web",
  components: {
    Container,
    "app-text": Text
  }
};
</script>

<style>
@import "../assets/css/pages/web.css";
</style>
