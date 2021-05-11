<script>
  import { recipeList } from "./recipeListStore";
  import SvelteMarkdown from "svelte-markdown";
  import { onMount } from "svelte";
  export let params;

  let recipe = [];
  onMount(async () => {
    let id = params.id;
    recipe = $recipeList.filter((x) => x.id == id)[0];
  });
</script>

<h1>{recipe.title}</h1>
<SvelteMarkdown source={recipe.contents} />

<a href="\">Back</a>
