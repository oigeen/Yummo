import Vue from 'vue'
import Vuex from 'vuex'
import ingredients from './modules/ingredients'
import recipes from './modules/recipes'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ingredients: ingredients,
        recipes: recipes
    }
})
   