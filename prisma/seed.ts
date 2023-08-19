import { PrismaClient } from '@prisma/client'
import { hash, compare } from 'bcrypt';

const prisma = new PrismaClient();

async function main () {
  const user = await prisma.user.create({
    data: {
      username: 'admin',
      password: await hash('admin1234', 10),
    }
  });

  const general = await prisma.category.create({
    data: {
      name: "General",
    }
  });

  const bmi = await prisma.calculator.create({
    data: {
      name: "Body Mass Index",
      shortName: "BMI",
      description: "Calculate your BMI",
      url: "/calculators/bmi",
      variables: JSON.stringify(['weight', 'height']),
      categoryId: general.id,
    }
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
