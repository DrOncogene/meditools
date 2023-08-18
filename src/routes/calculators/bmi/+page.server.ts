import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({request}) => {
    const data = await request.formData();
    const parsedData = Object.fromEntries(data.entries());

    let weight = parseFloat(parsedData.weight.toString());
    let height = parseFloat(parsedData.height.toString());

    if (parsedData.wtUnit === "lb") {
      weight = weight * 0.453592;
    };
    if (parsedData.htUnit === "in") {
      height = height * 2.54;
    };

    const bmi = weight / ((height / 100) ** 2);
    let description;

    if (bmi < 18.5) {
      description = "Underweight";
    } else if (bmi < 25) {
      description = "Normal";
    } else if (bmi < 30) {
      description = "Overweight";
    } else if (bmi < 35) {
      description = "Obese (Grade 1)";
    } else if (bmi < 40) {
      description = "Obese (Grade 2)";
    } else {
      description = "Obese (Morbid)";
    };

    return {
      result: bmi.toFixed(1),
      unit: 'Kg/m2',
      description
    };
  }
};