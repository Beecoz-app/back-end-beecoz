import {PrismaClient} from '@prisma/client'
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
    
    const marcenarioService = await prisma.serviceType.upsert({
        where: {id: 1},
        update: {},
        create: {
            name: 'Marcenaria'
        }
    })

    const churrasqueiroService = await prisma.serviceType.upsert({
        where: {id: 2},
        update: {},
        create: {
            name: 'Churrasqueiro'
        }
    })

    const ratingNothing = await prisma.rating.upsert({
        where: {id: 1},
        update: {},
        create: {
            stars: 0,
            comment: 'NOthing Rating'
        }
    })
    const ratingOne = await prisma.rating.upsert({
        where: {id: 2},
        update: {},
        create: {
            stars: 1,
            comment: 'Start One'
        }
    })
    const ratingTwo = await prisma.rating.upsert({
        where: {id: 3},
        update: {},
        create: {
            stars: 2,
            comment: 'Start Two'
        }
    })
    const ratingThree = await prisma.rating.upsert({
        where: {id: 4},
        update: {},
        create: {
            stars: 3,
            comment: 'Start Three'
        }
    })
    const ratingFour = await prisma.rating.upsert({
        where: {id: 5},
        update: {},
        create: {
            stars: 4,
            comment: 'Start Four'
        }
    })
    const ratingFive = await prisma.rating.upsert({
        where: {id: 6},
        update: {},
        create: {
            stars: 5,
            comment: 'Start Five'
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