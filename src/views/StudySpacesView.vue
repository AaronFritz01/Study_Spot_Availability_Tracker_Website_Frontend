<template>
  <main>
    <location-section />
    <contact-section />
  </main>
</template>

<script>
import ContactSection from "../components/ContactSection.vue";
import LocationSection from "../components/LocationSection.vue";

export default {
  name: "StudySpacesView",
  components: {
    ContactSection,
    LocationSection,
  },
};

</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
