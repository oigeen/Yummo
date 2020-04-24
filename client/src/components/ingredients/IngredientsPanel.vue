<template>
  <div>
    <v-toolbar class="hidden-md-and-up">
      <v-toolbar-items>
        <v-icon @click="onCloseDrawer">mdi-arrow-left</v-icon>
      </v-toolbar-items>
    </v-toolbar>
    <SelectedIngredients :isDisabled="isDisabled"></SelectedIngredients>

    <IngredientsSearch :isDisabled="isDisabled"></IngredientsSearch>
    <IngredientsList :isDisabled="isDisabled"></IngredientsList>
  </div>
</template>

<script>
import IngredientsList from "./IngredientsList";
import IngredientsSearch from "./IngredientsSearch";
import SelectedIngredients from "./SelectedIngredients";

export default {
  name: "IngredientsPanel",
  components: { IngredientsList, IngredientsSearch, SelectedIngredients },
  computed: {
    isDisabled: function() {
      return this.$store.state.recipes.isLoading;
    },
  },
  methods: {
    onCloseDrawer: function() {
      this.$emit("onCloseDrawer");
    },
  },
};
</script>

<style></style>
