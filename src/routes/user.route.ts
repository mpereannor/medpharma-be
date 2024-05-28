import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers.ts/user.controller";

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/', createUser)

export default userRouter