import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

const recents: Writable<Set<number>> = writable(new Set());

export default recents;
