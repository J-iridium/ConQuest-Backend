import { PrismaClient } from '@prisma/client'
import userData from "../src/lib/data.json" assert { type: "json" }


const prisma = new PrismaClient()


async function main() {
    console.log(`Start seeding ...`)
  
    for (const p of userData) {
      const bingo = await prisma.bingo.create({
        data: {
            title: p.title,
        }
      })
      console.log(`Created user with id: ${bingo.id}`)
    }
    console.log(`Seeding finished.`)
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