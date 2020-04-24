<template>
  <div>
    <v-card :disabled="isDisabled">
      <v-card-title class="text-center" v-if="!selectedIngredients.length">
        <v-card-text>No ingredients selected </v-card-text>
      </v-card-title>
      <v-card-text>
        <v-chip-group :column="true">
          <v-chip
            v-for="ingredient in selectedIngredients"
            :key="ingredient.name"
            close
            @click:close="onIngredientRemoved(ingredient)"
            >{{ ingredient.name }}
          </v-chip>
        </v-chip-group>

        <v-card-actions v-if="selectedIngredients.length" class="mt-3">
          <v-btn @click="onClearClicked">
            Clear
          </v-btn>
          <v-btn color="primary" @click="updateRecipes">Get Recipes</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectedIngredients",
  props: { isDisabled: Boolean },
  computed: {
    ...mapGetters("ingredients", ["selectedIngredientNames"]),
    selectedIngredients: function() {
      return this.$store.state.ingredients.selectedIngredients;
    },
  },
  methods: {
    onClearClicked() {
      this.$store.commit("ingredients/clear");
    },
    onIngredientRemoved(ingredient) {
      this.$store.commit("ingredients/remove", ingredient);
    },
    async updateRecipes() {
      try {
        await this.$store.dispatch("recipes/update");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
