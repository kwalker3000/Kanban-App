import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  let { userId, boards } = req.body

  let kanbanId
  try {
    let { id } = await prisma.kanban.upsert({
      where: {
        userId: userId,
      },
      update: {
        boards: boards,
      },
      create: {
        boards: boards,
        userId: userId,
      },
    })
    kanbanId = id
    console.log(kanbanId)
  } catch (e) {
    console.error(e)
    return
  }

  if (!kanbanId) {
    res.status(400).send()
  } else {
    res.status(200).send()
  }
}
// async function main() {
//   const user = await prisma.kanban.findMany()
//   console.log(user)
// }

// main().catch((e) => {
//   console.error(e.message)
// })
