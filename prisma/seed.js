import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createPost() {
  try {
    await prismaClient.post.create({
      data: {
        title: 'The Second Post by Tim Burns',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
  try {
    await createPost()
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })
