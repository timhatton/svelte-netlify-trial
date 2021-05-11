<script>
	import router from "page"
	import { onMount } from 'svelte';
	import RecipeList from './RecipeList.svelte';
	import RecipeView from './RecipeView.svelte';
	import About from './About.svelte';
    import "../node_modules/modern-css-reset/dist/reset.min.css";
	import "./styles.css";

	let page
	let params;
	router('/recipe/:id', 
		  (ctx, next) => {
  		  	params = ctx.params;
  			next();
		  },  
		  () => page = RecipeView);

	router('/', () => page = RecipeList);
	router('/about', () => page = About);

	router.start();

	//let recipeId = null;

	// async function hashchange() {
	// 	// the poor man's router!
	// 	const path = window.location.hash.slice(1);
	// 	console.log({path});
	// 	if (path.startsWith('/recipe')) {
	// 		const id = path.slice(8);
	// 		console.log({id});		
			
	// 		recipeId = id;
	// 		window.scrollTo(0,0);
	// 	} else {
	// 		recipeId = null
	// 		window.scrollTo(0,0);
	// 	}
	// }
	// onMount(hashchange);
</script>
<!-- <svelte:window on:hashchange={hashchange}/> -->
<main>
	<!-- {#if recipeId  }
		<RecipeView id={recipeId} />
	{:else}
		<RecipeList />
	{/if}		 -->
	<svelte:component this={page}  params={params}/>
</main>

<style>
	main {		
		padding: 1em;
		max-width: 1000px;
		margin: 0 auto;
	}
/* 
	h1 {
		color: var(--blue);
		text-transform: uppercase;

	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>