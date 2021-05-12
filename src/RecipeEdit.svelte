<script>
    import { recipeList } from './recipeListStore.js';
    import { onMount } from "svelte";
    import router from "page"

    export let params;

    let originalRecipe = [];
    let currentRecipe = []

    onMount(async () => {
        let id = params.id;
        originalRecipe = $recipeList.filter((x) => x.id == id)[0];
        currentRecipe = {...originalRecipe};
        console.log({currentRecipe});
    });
    async function submitHandler() {    
        // Do some submiting here    
        router.redirect( '/');
    }
    async function cancelHandler() {
        router.redirect( '/');
    }
</script>

<h1>Edit recipe</h1>
<form on:submit|preventDefault={submitHandler}>
    <div>
      <input
        type="text"
        name="title"
        bind:value={currentRecipe.title}        
      />
      
    </div>
    <div>
      <input
        type="text"
        name="description"
        bind:value={currentRecipe.description}
        
      />      
    </div>
    <div>
        <textarea
            name="contents"
            bind:value={currentRecipe.contents} />
    </div>
    <div>
      <button type="submit">Save</button>
    </div>
    <div>
        <button >Cancel</button>
      </div>
  </form>