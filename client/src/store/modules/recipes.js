import agent from "../../api/agent";

const state = {
  currentRecipes: [],
  selectedRecipe: {},
  isLoading: false,
  firstSearchConducted: false,
  dailyLimitReached: false
};

const mutations = {
  clear(state) {
    state.currentRecipes = [];
  },
  update(state, recipes) {
    state.currentRecipes = recipes;
  },
  setSelectedRecipe(state, selectedRecipe) {
    state.selectedRecipe = selectedRecipe;
  },
  dailyLimitReached(state, bool) {
    state.dailyLimitReached = bool
  }
};

const actions = {
  async update({ state, commit, rootGetters }) {
    state.firstSearchConducted = true;
    state.isLoading = true;
    commit('setSelectedRecipe', {});
    commit('ingredients/toggleDisabled', null, { root:true });
    commit('clear', recipes);

    let ingredients = rootGetters["ingredients/selectedIngredientNames"];
    let response = await agent.getRecipes(ingredients);

    ///edamam
    //let recipes = response.data.hits.map((hit) => hit.recipe);

    //Return if response indicates daily limit hit
    if(response.data.results.code == 402) {
      state.isLoading = false;

      commit("dailyLimitReached", true)
      return
    }

    let recipes = response.data.results;
    commit("update", recipes);
    
    commit('ingredients/toggleDisabled', null, { root:true });
    state.isLoading = false;
  },
  
  async getRecipeDetails({ state, commit }, recipeId) {
    state.isLoading = true;
    
    let response = await agent.getRecipeById(recipeId);
    let recipe = response.data.result;
    commit("setSelectedRecipe", recipe);
    state.isLoading = false;
  }
};
export default { namespaced: true, state, mutations, actions };
