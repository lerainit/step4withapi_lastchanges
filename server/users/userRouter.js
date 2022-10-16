import express from "express";
import { getUsers,addNewSubscriber } from "./userControllers.js";


const userRouter = express.Router()


userRouter.get('',getUsers)

userRouter.put('',addNewSubscriber)

export default userRouter