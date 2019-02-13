<template>
  <Container>
    <app-text title="Contacto"></app-text>
  </Container>
</template>

<script>
import Container from "@/components/slots/MainContainerSlot.vue";
import Text from "@/components/Texts/Text.vue";

export default {
  name: "Contacto",
  components: {
    Container,
    "app-text": Text
  }
};
</script>

<style>
@import "../assets/css/pages/contacto.css";
</style>
