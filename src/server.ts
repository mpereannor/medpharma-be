import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { auth } from "express-oauth2-jwt-bearer"
import { authConfig } from "./config/auth.config"
import consultationRouter from "./routes/consultation.route"
import userRouter from "./routes/user.route"
dotenv.config()

const server: Express = express()
const port: string | number = process.env.PORT || 8000
const env: string = process.env.NODE_ENV || "development"

server.use(
  cors({
    origin: "*",
  })
)
server.use(helmet())
server.use(express.json())

server.use(
  auth({
    issuerBaseURL: authConfig.issuerBaseURL,
    audience: authConfig.audience,
  })
)

server.get("/", (req: Request, res: Response) => {
  res.json({
    message: `Hello, Welcome MedPharma Server!`,
  })
})

server.get("/api/private", (req: Request, res: Response) => {
  res.json({
    message: `Hello, ${req.auth?.payload.sub} MedPharma Server!`,
  })
})

server.use("/users", userRouter)
server.use("/consultations", consultationRouter)

server
  .listen(port, () => {
    console.log(`${env} server running on port ${port}`)
  })
  .on("error", (err) => {
    throw new Error(err.message)
  })

export default server
