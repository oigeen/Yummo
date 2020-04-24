<template>
  <div>
    <RecipesPanel class="pa-3" />
  </div>
</template>

<script>
import RecipesPanel from "./recipes/RecipesPanel";
import store from "../store";

export default {
  name: "Dashboard",
  store,
  components: {
    RecipesPanel,
  }
};
</script>
