import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const userClient = new PrismaClient().user

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userClient.findMany({
      include: {
        consultationsOfficer: true,
        consultationsPatient: true
      },
    })
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
      include: {
        consultationsOfficer: true,
        consultationsPatient:true
      },
    })

    res.status(200).json({ data: user })
  } catch (e) {
    console.log(e)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const user = await userClient.create({
      data: userData,
    })

    res.status(201).json({ data: user })
  } catch (e) {
    console.log(e)
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const userData = req.body

    const user = await userClient.update({
      where: {
        id: userId,
      },
      data: userData,
    })

    res.status(200).json({ data: user })
  } catch (e) {
    console.log(e)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const user = await userClient.delete({
      where: {
        id: userId,
      },
    })

    res.status(200).json({ data: {} })
  } catch (e) {
    console.log(e)
  }
}
