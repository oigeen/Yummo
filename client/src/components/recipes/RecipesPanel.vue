<template>
  <div style="height: 75vh;">
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" align="center">
          <Landing v-if="!firstSearchConducted"></Landing>

          <v-progress-circular
            v-else-if="isLoading"
            indeterminate
            color="primary"
          ></v-progress-circular>

          <DailyLimitReached v-else-if="dailyLimitReached"> </DailyLimitReached>

          <RecipeDetails v-else-if="selectedRecipe.id" :recipe="selectedRecipe">
          </RecipeDetails>

          <RecipesDisplay v-else-if="recipes.length" :recipes="recipes">
          </RecipesDisplay>

          <NoRecipes v-else></NoRecipes>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Landing from "./Landing";
import RecipesDisplay from "./RecipesDisplay";
import RecipeDetails from "./RecipeDetails";
import NoRecipes from "./NoRecipes";
import DailyLimitReached from "./DailyLimitReached";
import { mapState } from "vuex";

export default {
  name: "RecipesPanel",
  components: {
    RecipesDisplay,
    NoRecipes,
    RecipeDetails,
    Landing,
    DailyLimitReached,
  },
  computed: mapState({
    recipes: (state) => state.recipes.currentRecipes,
    selectedRecipe: (state) => state.recipes.selectedRecipe,
    isLoading: (state) => state.recipes.isLoading,
    firstSearchConducted: (state) => state.recipes.firstSearchConducted,
    dailyLimitReached: (state) => state.recipes.dailyLimitReached,
  }),
};
</script>
