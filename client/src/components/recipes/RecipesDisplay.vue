<template>
  <div>
    <v-container fluid>
      <v-row no-gutters>
        <v-col v-for="recipe in recipes" :key="recipe.uri" lg="3" md="4" sm="6" xs="12">
          <Recipe
            :recipe="recipe"
            class="ma-5"
          ></Recipe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Recipe from "./Recipe";


export default {
  name: "RecipesDisplay",
  props: { recipes: Array },
  components: {
    Recipe
  }
};
</script>
