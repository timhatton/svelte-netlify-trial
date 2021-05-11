<script>
    import { recipeList } from "./recipeListStore";
    import SvelteMarkdown from 'svelte-markdown';

    export let id;

    let recipe = $recipeList.filter(x => x.id == id)[0];
</script>
<h1>{recipe.title}</h1>
<SvelteMarkdown source={recipe.contents} />