<template>
  <v-container>
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-card @click="fetchRecipeDetails" target="_blank" flat>
        <v-responsive :aspect-ratio="16 / 9">
          <v-img :src="recipe.image" max-height="300"> </v-img>
          <v-card-title>
            <p class="align-left" color="green">{{ recipe.title }}</p>
          </v-card-title>
        </v-responsive>
      </v-card>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "Recipe",
  data: function() {
    return {
      isActive: false,
    };
  },
  props: {
    recipe: Object,
  },
  methods: {
    fetchRecipeDetails: async function() {
      await this.$store.dispatch("recipes/getRecipeDetails", this.recipe.id);
    },
  },
};
</script>

<style scoped></style>
