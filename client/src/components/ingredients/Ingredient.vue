<template>
  <v-list-item>
    <v-list-item-title>
      {{ ingredient.name }}
    </v-list-item-title>
    <v-checkbox :value="isSelected" @change="onCheckboxChanged"></v-checkbox>
  </v-list-item>
</template>

<script>
export default {
  name: "Ingredient",
  props: { ingredient: Object, isDisabled: Boolean },
  computed: {
    isSelected: function() {
      return this.$store.state.ingredients.selectedIngredients.includes(
        this.ingredient
      );
    }
  },
  methods: {
    onCheckboxChanged() {
      if (!this.isSelected) {
        this.$store.commit("ingredients/add", this.ingredient);
      } else {
        this.$store.commit("ingredients/remove", this.ingredient);
      }
    }
  }
};
</script>
