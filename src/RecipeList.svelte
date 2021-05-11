<script>
    import { recipeList } from './recipeListStore.js';
    import SvelteMarkdown from 'svelte-markdown';
</script>

<h1>All recipes</h1>
<h2>There are currently {$recipeList.length} recipes in total</h2>
<h2>Listed by create date, newest first</h2>
<dl>
{#each $recipeList as recipe}
    <dt><a href="#/recipe/{recipe.id}">{recipe.title}</a></dt>
    <dd>{recipe.description}</dd>
    <!-- <SvelteMarkdown source={recipe.contents} /> -->
{/each}
</dl>


