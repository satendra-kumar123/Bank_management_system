import { Router } from "express";
import { userRegister } from "../controllers/user.controller.js";
const router = Router()

router.route("/userRegister").post(userRegister)
// router.route("/login").post(loginUser)
// router.route("signup").get(getData)

export { router }