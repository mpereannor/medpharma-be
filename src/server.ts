import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { auth } from "express-openid-connect"
import { config } from "./config/auth.config"
dotenv.config()

const server: Express = express()
const port: string | number = process.env.PORT || 8000
const env: string = process.env.NODE_ENV || "development"

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get("/", (req: Request, res: Response) => {
  res.send("Hello, MedPharma App!")
})

server.use(auth(config))
server.get("/auth", (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out")
})
server
  .listen(port, () => {
    console.log(`${env} server running on port ${port}`)
  })
  .on("error", (err) => {
    throw new Error(err.message)
  })

export default server
