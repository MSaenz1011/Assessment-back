import { PrismaClient } from "@prisma/client";
import favsSeeder from "./favsSeeder";

const prisma = new PrismaClient();

const seeders = [favsSeeder];

const seed = async () => {
  for (const seeder of seeders) {
    await seeder(prisma);
  }
};

seed()
  .catch((error) => {
    console.error("Error", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default seed;