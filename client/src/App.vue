<template>
  <v-app>
    <Navbar @toggleDrawer="toggleDrawer"></Navbar>
    <v-navigation-drawer  
      width="400"
      v-model="drawer"
      clipped
      fixed
      app
      hide-overlay
      mobile-break-point="960"
      disable-resize-watcher
    >
      <IngredientsPanel @onCloseDrawer="toggleDrawer"></IngredientsPanel>
    </v-navigation-drawer>
    <v-content>
      <Dashboard />
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from "./components/Dashboard";
import Navbar from './components/Navbar';
import IngredientsPanel from "./components/ingredients/IngredientsPanel";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    Navbar,
    Dashboard,
    IngredientsPanel,
  },
  data: () => ({
    drawer: !null,
  }),
  methods: {
    toggleDrawer: function() { this.drawer = !this.drawer }
  }
};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
