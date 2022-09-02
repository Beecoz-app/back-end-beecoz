import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    const beginner = await prisma.typeUser.upsert({
        where: {id: 1},
        update: {},
        create: {
            level: 'Beginner'
        }
    })
    const intermediate = await prisma.typeUser.upsert({
        where: {id: 2},
        update: {},
        create: {
            level: 'Intermediate'
        }
    })
    
    const queen = await prisma.typeUser.upsert({
        where: {id: 3},
        update: {},
        create: {
            level: 'Queen'
        }
    })
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })