import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (request) => {
  const name = request.url.pathname.split("/").pop();

  const categories = await prisma.category.findMany({
    include: {
      calculators: true,
    },
  });

  const calculators = await prisma.calculator.findMany({});

  const calculator = await prisma.calculator.findFirst({
    where: {
      shortName: name?.toUpperCase(),
    },
  });

  return {
    id: <number>calculator?.id,
    categories,
    calculators,
  };
};
