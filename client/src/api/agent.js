import axios from "axios";

export default {
  getRecipes: async function(selectedIngredientNames) {
    if (
      selectedIngredientNames == undefined ||
      selectedIngredientNames.length < 1
    ) {
      alert("No or undefined query Ingredients");
      return;
    }
    this.recipes = [];

    //var baseUrl = "https://api.edamam.com/search";
    var baseUrl = "http://localhost:3000/api/search";
    var ingredients = "";
    //var apiKey = process.env.VUE_APP_SPOONACULAR_API_KEY;
    //var appId = process.env.VUE_APP_APP_ID;
    //this variable sets how many recipes will be in the response
    //var to = "50";

    selectedIngredientNames.forEach((ingredient) => {
      ingredients += ingredient + ",";
      //ingredients += ingredient + " ";
    });

    var queryString =
      baseUrl +
      // "?q=" +
      "?ingredients=" +
      ingredients;
    // "&app_key=" +
    // apiKey +
    // "&app_id=" +
    //"&apiKey=" +
    //apiKey
    // "&to=" +
    // to;
    return await axios.get(queryString);
  },

  getRecipeById: async function(id) {
    if(id < 1 || !id) {
      alert("Invalid recipe Id");
      return;
    }

    var baseUrl = "http://localhost:3000/api/getRecipe";

    var queryString = baseUrl + "?recipeId=" + id;
    return await axios.get(queryString);
  }
};
