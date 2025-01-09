import { Animal, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { process } from 'process';

const prisma = new PrismaClient();

async function main() {
    const animals: Animal[] = [];
  
    for (let i = 0; i < 10; i++) {
      animals.push({
        name: faker.animal.type(),
        species: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 20 }),
        adopterName: faker.datatype.boolean() ? faker.person.fullName() : null,
      });
    }

  for (const animal of animals) {
    await prisma.animal.create({ data: animal });
  }

  console.log('Seeding completed.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
