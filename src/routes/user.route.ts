import { Router } from "express";
import { getUserById, getUsers } from "../controllers.ts/user.controller";

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)

export default userRouter