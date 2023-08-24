import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const parsedData = Object.fromEntries(data.entries());

    let weight = parseFloat(parsedData.weight.toString());
    let height = parseFloat(parsedData.height.toString());

    if (parsedData.wtUnit === 'lb') {
      weight = weight * 0.453592;
    }
    if (parsedData.htUnit === 'in') {
      height = height * 2.54;
    }

    const bmi = weight / (height / 100) ** 2;
    let description;
    let postInfo =
      'You are in the OBESE range. Obesity is a risk factor for many chronic diseases such as type 2 diabetes, hypertension, and cardiovascular disease. You need to lose weight, talk to a nutritionist.';

    if (bmi < 18.5) {
      description = 'Underweight';
      postInfo =
        'Low BMI may predispose conditions associated with nutritional deficiency, such as osteoporosis, anemia, and immunodeficiency. You might need to gain weight, talk to a nutritionist.';
    } else if (bmi < 25) {
      description = 'Normal';
      postInfo = 'You are in a healthy weight range. Keep it up!👌';
    } else if (bmi < 30) {
      description = 'Overweight';
      postInfo = 'You might need to lose weight, talk to a nutritionist.';
    } else if (bmi < 35) {
      description = 'Obese (Grade 1)';
    } else if (bmi < 40) {
      description = 'Obese (Grade 2)';
    } else {
      description = 'Obese (Morbid)';
    }

    return {
      result: bmi.toFixed(1),
      unit: 'Kg/m2',
      data: parsedData,
      description,
      postInfo
    };
  }
};
