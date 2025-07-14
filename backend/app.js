import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())

app.use(cors())


// Routes import.

import { router } from "./src/routes/user.routes.js"

app.use("/api/v1/user",router)


export { app }