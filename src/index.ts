import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'test@exmple.com',
      password: "password",
      expenses: {
        create:{
          price: 2400,
          title: 'new Expense',
          memo: "testmemo"
        }
      }
      },
    },
  )
  console.log('Created new user: ', newUser)

  const allUsers = await prisma.user.findMany({
    include: { expenses: true },
  })
  console.log('All users: ')
  console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())