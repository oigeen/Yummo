<template>
  <div>
    <v-autocomplete
      class="pa-8"
      v-model="ingredient"
      :items="unselectedIngredients"
      :disabled="isDisabled"
      :allow-overflow="true"
      item-text="name"
      placeholder="Ingredient search"
      no-data-text="Can't find that ingredient"
      clearable
      return-object
      @change="onModelChange"
    ></v-autocomplete>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IngredientsSearch",
  props: { isDisabled: Boolean },
  data: function() {
    return {
      ingredient: null
    };
  },
  methods: {
    onModelChange() {
      this.$store.commit("ingredients/add", this.ingredient);
    }
  },
  computed: {
    ...mapGetters("ingredients", ["unselectedIngredients"])
  }
};
</script>
