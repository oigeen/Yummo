<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <BackToRecipes></BackToRecipes>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <template>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img :src="recipe.image"></v-img>
            <v-card-title class="text-left">{{ recipe.title }}</v-card-title>
            <v-card-subtitle class="text-left">
              Recipe by
              <a :href="recipe.sourceUrl" target="_blank">{{
                recipe.sourceName
              }}</a>
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-container>
              <v-row>
                <v-col cols="6" v-if="recipe.preparationMinutes">
                  <v-card-text>
                    <b>Prep time: </b>{{ recipe.preparationMinutes }} minutes
                  </v-card-text>
                </v-col>

                <v-col cols="6" v-if="recipe.cookingMinutes">
                  <v-card-text>
                    <b>Cook time:</b> {{ recipe.cookingMinutes }} minutes
                  </v-card-text>
                </v-col>

                <v-col cols="6" v-if="recipe.readyInMinutes">
                  <v-card-text v-if="recipe.readyInMinutes">
                    <b>Total time:</b> {{ recipe.readyInMinutes }} minutes
                  </v-card-text>
                </v-col>

                <v-col cols="6">
                  <v-card-text
                    ><b>Servings:</b> {{ recipe.servings }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-tabs fixed-tabs v-model="tab">
            <v-tab>
              Ingredients
            </v-tab>
            <v-tab>
              Method
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card class="text-left pa-6">
                <template v-if="ingredients">
                  <v-list-item v-for="ing in ingredients" :key="ing">
                    {{ ing }}
                  </v-list-item>
                </template>

                <v-card-text v-else>
                  Cannot find recipe ingredients. Find this recipe at 
                  <a :href="recipe.sourceUrl" target="_blank">{{
                    recipe.sourceUrl
                  }}</a>
                  for more details
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="pa-6">
                <ol v-if="method">
                  <li v-for="step in method" :key="step" class="text-left pa-2">
                    {{ step }}
                  </li>
                </ol>

                <v-card-text v-else>
                  Cannot find recipe instructions. Find this recipe at 
                  <a :href="recipe.sourceUrl" target="_blank">{{
                    recipe.sourceUrl
                  }}</a>
                  for more details
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item> </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </template>
    <!-- <template v-else>
      <RecipeNotFound></RecipeNotFound>
    </template> -->
  </v-container>
</template>

<script>
import BackToRecipes from "./BacktoRecipes";

export default {
  name: "RecipeDetails",
  props: { recipe: Object },
  components: { BackToRecipes },
  data() {
    return {
      tab: null,
      recipeIsValid: false,
    };
  },
  computed: {
    method: function() {
      if (!this.recipe.analyzedInstructions[0]) {
        return;
      }
      return this.recipe.analyzedInstructions[0].steps.map((step) => step.step);
    },
    ingredients: function() {
      return this.recipe.extendedIngredients.map((ing) => ing.original);
    },
  },
};
</script>

<style scoped></style>
