import { Router } from "express"

import {
  createConsultation,
  deleteConsultation,
  readConsultation,
  readConsultations,
  updateConsultation,
} from "../controllers.ts/consultation.controller"

const consultationRouter = Router()

consultationRouter.post("/", createConsultation)
consultationRouter.put("/:id", updateConsultation)
consultationRouter.get("/", readConsultations)
consultationRouter.get("/:id", readConsultation)
consultationRouter.delete("/:id", deleteConsultation)

export default consultationRouter
