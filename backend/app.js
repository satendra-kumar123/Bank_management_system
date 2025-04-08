import express from "express"
import { router } from "./src/routes/auth.routes.js"
import cors from "cors"
const app = express()
app.use(cors())
app.use("/api/v1/user",router)
export { app }