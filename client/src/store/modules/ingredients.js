import ingredients from "../../data/ingredients";

const state = {
  allIngredients: ingredients.allIngredients,
  selectedIngredients: []
};

const mutations = {
  add(state, newIngredient) {
    state.selectedIngredients.push(newIngredient);
  },
  toggleDisabled(state) {
    state.allIngredients.forEach(ing => (ing.disabled = !ing.disabled));
  },
  update(state, newIngredients) {
    state.selectedIngredients = newIngredients;
  },
  remove(state, ingredient) {
    let index = state.selectedIngredients.indexOf(ingredient);
    state.selectedIngredients.splice(index, 1);
  },
  clear(state) {
    state.selectedIngredients = [];
  }
};

const getters = {
  flattenedIngredients: state => {
    let result = [];
    state.allIngredients.forEach(cat => {
      cat.children.forEach(ingredient => {
        if(ingredient.children){
          ingredient.children.forEach(subIng => {
            result.push(subIng);
          })
        }
        else {
          result.push(ingredient);
        }
      })
    })
    return result;
  },  
  unselectedIngredients: (state, getters) => {
    return getters.flattenedIngredients.filter(ing => {
      return !state.selectedIngredients.includes(ing);
    }).sort((a,b) => {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  },
  selectedIngredientNames: state => {
    return state.selectedIngredients.map(ingredient => ingredient.name);
  },
  isSelected: state => ingredient => {
    return state.selectedIngredients.includes(ingredient);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  getters
};
