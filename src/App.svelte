<script>
	import router from "page"
	import { onMount } from 'svelte';
	import RecipeList from './RecipeList.svelte';
	import RecipeView from './RecipeView.svelte';
	import RecipeEdit from './RecipeEdit.svelte';
	import About from './About.svelte';
    import "../node_modules/modern-css-reset/dist/reset.min.css";
	import "./styles.css";
	import netlifyIdentity from 'netlify-identity-widget'
	import { user, redirectURL } from './identityStore.js'

	netlifyIdentity.init();

	$: isLoggedIn = !!$user
  	$: username = $user !== null ? $user.username : ' there!'

	  function handleUserAction(action) {
    if (action === 'login' || action === 'signup') {
      netlifyIdentity.open(action)
      netlifyIdentity.on('login', u => {
        user.login(u)
        netlifyIdentity.close()
        if ($redirectURL !== '') {
		  router.redirect( $redirectURL);
          redirectURL.clearRedirectURL()
        }
      })
    } else if (action === 'logout') {
		router.redirect('/')
      user.logout()
      netlifyIdentity.logout()
    }
  }

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
	{#if isLoggedIn}
    <div class="center">
      <p>Hello {username}</p>
      <div>
        <button on:click={() => handleUserAction('logout')}>Log Out</button>
      </div>
    </div>
  {:else}
    <div class="center">
      <p>You are not logged in.</p>
      <div>
        <button on:click={() => handleUserAction('login')}>Log In</button>
        <button on:click={() => handleUserAction('signup')}>Sign Up</button>
      </div>
    </div>
  {/if}
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