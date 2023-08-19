import { writable, type Writable } from 'svelte/store';

const categories: Writable<Category[]> = writable([]);
const calculators: Writable<Calculator[]> = writable([]);

export const categoriesStore = categories;
export const calcStore = calculators;
