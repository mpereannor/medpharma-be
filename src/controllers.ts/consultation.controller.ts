import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { Auth0Client, Auth0ClientOptions } from "@auth0/auth0-spa-js"

const prisma = new PrismaClient()

export const createConsultation = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      healthcareProvider,
      consultationType,
      medicalCondition,
      patient,
    } = req.body

    const officerId = req.auth?.payload.sub || ""
    if (
      !title ||
      !description ||
      !healthcareProvider ||
      !consultationType ||
      !medicalCondition ||
      !patient ||
      !officerId
    ) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    const officerExists = await prisma.user.findUnique({
      //@ts-ignore
      where: { id: officerId },
    })

    if (!officerExists) {
      return res.status(404).json({ message: "Officer not found" })
    }

    const consultation = await prisma.consultation.create({
      data: {
        title,
        description,
        healthcareProvider,
        consultationType,
        medicalCondition,
        patient,
        //@ts-ignore
        officer: { connect: { id: officerId } },
      },
    })

    res.status(201).json({ data: consultation })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const updateConsultation = async (req: Request, res: Response) => {
  try {
    const consultationId = req.params.id
    const consultationData = req.body

    const consultation = await prisma.consultation.update({
      where: {
        id: consultationId,
      },
      data: consultationData,
    })
    res.status(200).json({ data: consultation })
  } catch (e) {
    console.log(e)
  }
}

export const readConsultations = async (req: Request, res: Response) => {
  try {
    const consultations = await prisma.consultation.findMany({
      take: 10,
    })

    res.status(200).json({ data: consultations })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const readConsultation = async (req: Request, res: Response) => {
  try {
    const consultationId = req.params.id
    const consultation = await prisma.consultation.findUnique({
      where: {
        id: consultationId,
      },
    })
    res.status(200).json({ data: consultation })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const deleteConsultation = async (req: Request, res: Response) => {
  try {
    const consultationId = req.params.id
    const consultation = await prisma.consultation.delete({
      where: {
        id: consultationId,
      },
    })
    res.status(200).json({ data: consultation })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
