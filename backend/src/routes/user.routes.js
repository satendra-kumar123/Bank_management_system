import { Router } from "express";
import { loginUser, logoutUser, userRegister } from "../controllers/user.controller.js";

const router = Router()

router.route("/userRegister").post(userRegister)
router.route("/login").patch(loginUser)
router.route("/logout").delete(logoutUser)

export { router }