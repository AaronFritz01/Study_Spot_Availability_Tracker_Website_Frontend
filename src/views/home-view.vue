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
import SplashScreenSection from "../components/splash-screen-section.vue";
import OptionCardSection from "../components/option-card-section.vue";
import AnnouncmentsSection from "../components/announcments-section.vue";
import AboutSection from "../components/about-section.vue";
import ContactSection from "../components/contact-section.vue";

export default {
  name: "HomeView",

  components: {
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
