import calculators from '$lib/server/database/calculators.json';
import categories from '$lib/server/database/categories.json';
import { calcStore, categoriesStore } from '$lib/stores/calculators';

export async function loadDb() {
  calcStore.set(calculators);

  const updatedCategories = categories.map((category) => {
    return {
      ...category,
      calculators: calculators.filter((calc) => calc.categoryId === category.id)
    };
  });
  categoriesStore.set(updatedCategories);
}
