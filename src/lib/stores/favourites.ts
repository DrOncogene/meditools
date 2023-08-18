import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

const favourites: Writable<Set<number>> = writable(new Set());

if (browser) {
  const storedFavourites = localStorage.getItem('__meditools__favourites');
  if (storedFavourites) {
    favourites.set(new Set(JSON.parse(storedFavourites)));
  }
}

export default favourites;
