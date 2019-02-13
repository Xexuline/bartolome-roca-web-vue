<template>
  <Container>
    <app-text title="Contacto"></app-text>
  </Container>
</template>

<script>
import Text from "@/components/Texts/TextCurriculum.vue";
import Container from "@/components/slots/MainContainerSlot.vue";

export default {
  name: "Curriculum",
  components: {
    Container,
    "app-text": Text
  }
};
</script>

<style>
@import "../assets/css/pages/curriculum.css";
</style>
