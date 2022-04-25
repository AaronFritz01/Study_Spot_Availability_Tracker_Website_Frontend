<template>
  <main>
    <splash-screen-section />
    <option-card-section />
    <announcments-section />
    <about-section />
    <contact-section />
  </main>
</template>

<script>
import SplashScreenSection from "../components/SplashScreenSection.vue";
import OptionCardSection from "../components/OptionCardSection.vue";
import AnnouncmentsSection from "../components/AnnouncmentsSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ContactSection from "../components/ContactSection.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    SplashScreenSection,
    OptionCardSection,
    AnnouncmentsSection,
    AboutSection,
    ContactSection,
  },
};

</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
