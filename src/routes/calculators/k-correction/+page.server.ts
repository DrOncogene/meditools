export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const parsedData = Object.fromEntries(data.entries());
    let deficit, maintenance, description, postInfo;

    const serumK = parseFloat(parsedData.serumK.toString());
    const targetK = parseFloat(parsedData.targetK.toString());
    let weight = parseFloat(parsedData.weight.toString());
    const wtUnit = parsedData.wtUnit.toString();

    if (wtUnit === 'lb') {
      weight = weight * 0.453592;
    }

    maintenance = 1 * weight;
    deficit = (targetK - serumK) * weight * 0.4;

    if (3 <= serumK && serumK < 3.5) {
      description = 'Mild hypokalemia';
      postInfo = 'Mild hypokalemia. Correct orally with slow K or syrup KCl.';
    } else if (2.5 <= serumK && serumK < 3) {
      description = 'Moderate hypokalemia';
      postInfo = 'Moderate hypokalemia. Correct orally with slow K or syrup KCl.';
    } else if (serumK < 2.5) {
      description = 'Severe hypokalemia';
      postInfo = 'Severe hypokalemia. Correct with IV KCl, following the above constraints.';
    }

    return {
      result: (maintenance + deficit).toFixed(0),
      unit: 'mmol',
      data: parsedData,
      postInfo,
      description
    };
  }
};
