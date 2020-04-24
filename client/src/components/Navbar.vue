<template>
  <div>
    <v-app-bar color="primary" app dark clipped-left>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <h2>Yummo</h2>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="white" @click="toggleDialog"
          >mdi-help-circle-outline</v-icon
        >
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog" max-width="400px">
      <v-card class="pa-4">
        <v-card-title class="headline"
          >Thank you for using Yummo!</v-card-title
        >
        <v-card-text
          >If you need some inspiration for your next meal, you're in the right place. </v-card-text
        >
        <v-card-text>
          Just list what ingredients you have in the panel on the left,
           hit "Get Recipes" and Yummo will suggest recipes that you can prepare.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="dialog = false"
            >Ok</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    toggleDrawer: function() {
      this.$emit("toggleDrawer");
    },
    toggleDialog: function() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss" scoped></style>
