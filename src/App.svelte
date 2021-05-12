<script>
	import router from "page"
	import { onMount } from 'svelte';
	import RecipeList from './RecipeList.svelte';
	import RecipeView from './RecipeView.svelte';
	import RecipeEdit from './RecipeEdit.svelte';
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
    router('/recipe-edit/:id',
			(ctx, next) => {
  		  	params = ctx.params;
  			next();
		  },  
		  () => page = RecipeEdit);	
	router('/', () => page = RecipeList);
	router('/about', () => page = About);	

	router.start();
</script>

<main>
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