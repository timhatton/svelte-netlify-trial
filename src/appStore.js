import { writable, derived, readable  } from 'svelte/store';

export const appState = writable ({
    isLoggedOn: false
});