<template>
  <v-btn icon>
    <v-icon @click="backToRecipes">mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "backToRecipes",
  methods: {
    backToRecipes: function() {
      this.$store.commit("recipes/setSelectedRecipe", {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
