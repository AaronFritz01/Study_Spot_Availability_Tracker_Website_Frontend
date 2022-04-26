<template>
  <v-app>
    <v-app-bar app dark color="black" v-if="$vuetify.breakpoint.xs">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-img
    class="mx-2"
    src="./assets/Purdue University Logo.svg"
    max-height="180"
    max-width="180"
    min-height="120"
    min-width="120"
    contain
  ></v-img>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary dark app>
      <v-list-item>
        <v-list-item-content>
          <v-img
    src="./assets/Purdue University Logo.svg"
    max-height="60"
    contain
  ></v-img>
          <v-list-item-subtitle>
            Study Spot Availability Tracker
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="section in sections"
          :key="section.title"
          :to="section.path"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
                {{ section.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar app dark color="black" v-if="!$vuetify.breakpoint.xs">
    <v-card color="white"></v-card>
      <v-img
    class="mx-2"
    src="./assets/Purdue University Logo.svg"
    max-height="180"
    max-width="180"
    min-height="120"
    min-width="120"
    contain
  ></v-img>
  <!-- <v-nav>
    <v-list></v-list>
  </v-nav> -->
  <v-list></v-list>
    </v-app-bar>
    <v-main>
      <header>
        <div class="gold-stripe"></div>
        <div class="black-stripe">
          <img
            alt="Purdue logo"
            class="logo"
            src="../src/assets/Purdue University Logo.svg"
          />
        </div>
        <div class="wrapper">
          <nav class="main-nav">
            <router-link to="/"
              >Home</router-link
            >
            <router-link

              to="/About"
              >About</router-link
            >
            <router-link

              to="/Campus_Map"
              >Campus Map</router-link
            >
            <router-link

              to="/Study_Spaces"
              >Study Spaces</router-link
            >
            <router-link

              to="/Statistics"
              >Statistics</router-link
            >
            <router-link

              to="/Contact"
              >Contact</router-link
            >
          </nav>
        </div>
      </header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: null,
    sections: [
      {title: 'Home', path: '/#'},
      {title: 'About', path: '/About'},
      {title: 'Campus Map', path: '/Campus_Map'},
      {title: 'Study Spaces', path: '/Study_Spaces'},
      {title: 'Statistics', path: '/Statistics'},
      {title: 'Contact', path: '/Contact'},
    ],
  }),
};
</script>

<style scoped>
.gold-stripe {
  background-color: #cfb991;
  height: 30px;
  padding: 0em 2em;
}
.main-nav {
  font-family: "Helvetica", sans-serif;
  background-color: white;
  color: black;
  height: 30px;
  padding: 0.25em 3.25em;
  display: flex;
  justify-content: space-between;
}
.black-stripe {
  background-color: black;
}
img {
  width: 20%;
  padding: 1.25em 3.25em;
}
</style>
