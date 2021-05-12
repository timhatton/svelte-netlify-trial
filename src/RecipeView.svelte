<script>
  import { appState } from "./appStore";
  import { recipeList } from "./recipeListStore";
  import SvelteMarkdown from "svelte-markdown";
  import { onMount } from "svelte";

  export let params;
  
  let recipe = [];
  onMount(async () => {
    let id = params.id;
    recipe = $recipeList.find(x => x.id == id) || [];
  });
</script>

<h1>{recipe.title}</h1>
<SvelteMarkdown source={recipe.contents} />
<hr />
<a href="/">Back</a>
{#if $appState.isLoggedOn}
<a href="/recipe-edit/{recipe.id}">Edit</a>
{/if}
