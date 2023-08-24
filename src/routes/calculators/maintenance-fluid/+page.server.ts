import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const parsedData = Object.fromEntries(data.entries());

    let age = parseFloat(parsedData.age.toString());
    let weight = parseFloat(parsedData.weight.toString());
    const ageUnit = parsedData.ageUnit.toString();
    const wtUnit = parsedData.wtUnit.toString();
    const description = 'per day';
    let fluid, postInfo;

    if (wtUnit === 'lb') {
      weight = weight * 0.453592;
    }
    if (ageUnit === 'mo') {
      age = age / 12;
    }

    if (weight <= 10) {
      fluid = 100 * weight;
    } else if (weight > 10 && weight <= 20) {
      fluid = 1000 + 50 * (weight - 10);
    } else {
      fluid = 1500 + 20 * (weight - 20);
    }

    return {
      result: fluid.toFixed(0),
      unit: 'mL',
      data: parsedData,
      description,
      postInfo
    };
  }
};
