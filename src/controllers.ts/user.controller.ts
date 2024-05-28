import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const userClient = new PrismaClient().user

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userClient.findMany({})
    res.status(200).json({ data: users })
  } catch (e) {
    console.log(e)
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const user = await userClient.findUnique({
      where: {
        id: userId,
      },
    })

    res.status(200).json({ data: user })
  } catch (e) {
    console.log(e)
  }
}
