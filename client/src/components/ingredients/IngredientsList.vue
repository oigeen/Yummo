<template>
  <v-list :disabled="isDisabled">
    <v-list-group
      v-for="(category, i) in allIngredients"
      :key="i"
      color="primary"
    >    
      <template #prependIcon>
        <v-badge :value="numberOfChildrenSelected(category) > 0" :content="numberOfChildrenSelected(category)">
          <v-icon>{{ category.icon }}</v-icon>
        </v-badge>
      </template>

      <template v-slot:activator>
        <v-list-item-title>{{ category.name }}</v-list-item-title>
      </template>
      <v-divider></v-divider>

      <template v-for="(ingredient) in category.children">
        <v-list-group v-if="ingredient.children" sub-group :key="ingredient.key">
          <template v-slot:activator>
            <v-list-item-title>{{ ingredient.name }}</v-list-item-title>
          </template>
          <v-divider></v-divider>

          <Ingredient
            :disabled="isDisabled"
            :ingredient="subIngredient"
            v-for="subIngredient in ingredient.children"
            :key="subIngredient.id"
            class="ml-12"
          >
          </Ingredient>
        </v-list-group>

        <Ingredient
          v-else
          :disabled="isDisabled"
          :ingredient="ingredient"
          class="ml-12"
          :key="ingredient.key"
        ></Ingredient>
      </template>
    </v-list-group>
  </v-list>
</template>

<script>
import Ingredient from "./Ingredient";
import ingredients from "../../data/ingredients";

export default {
  name: "IngredientsList",
  props: { isDisabled: Boolean },
  data: function() {
    return {
      allIngredients: ingredients.allIngredients
    };
  },
  components: { Ingredient },
  methods: {
    numberOfChildrenSelected: function(category) {
      let result = 0;
      category.children.forEach(ing => {
        if(ing.children){
          ing.children.forEach(subCat => {
            if(this.selectedIngredients.includes(subCat))
            result ++;
          })
        }
        else {
          if(this.selectedIngredients.includes(ing)) {
            result ++;
          }
        }
      })
      return result;
    }
  },
  computed: {
    selectedIngredients: function() {
      return this.$store.state.ingredients.selectedIngredients
    }
    
  }
};
</script>
