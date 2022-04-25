<template>
  <v-app>
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
            <router-link style="text-decoration: none; color: inherit" to="/"
              >Home</router-link
            >
            <router-link
              style="text-decoration: none; color: inherit"
              to="/About"
              >About</router-link
            >
            <router-link
              style="text-decoration: none; color: inherit"
              to="/Campus_Map"
              >Campus Map</router-link
            >
            <router-link
              style="text-decoration: none; color: inherit"
              to="/Study_Spaces"
              >Study Spaces</router-link
            >
            <router-link
              style="text-decoration: none; color: inherit"
              to="/Statistics"
              >Statistics</router-link
            >
            <router-link
              style="text-decoration: none; color: inherit"
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
  name: "App",

  data: () => ({
    //
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
