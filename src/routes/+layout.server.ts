import { get } from 'svelte/store';
import type { LayoutServerLoad } from './$types';
import { loadDb } from '$lib/server/db';
import { calcStore, categoriesStore } from '$lib/stores/calculators';

export const load: LayoutServerLoad = async (request) => {
  await loadDb();

  const name = request.url.pathname.split('/').pop();
  const calculator = get(calcStore).find((calc) => calc.shortName === name);

  return {
    id: <number>calculator?.id,
    categories: get(categoriesStore),
    calculators: get(calcStore)
  };
};
