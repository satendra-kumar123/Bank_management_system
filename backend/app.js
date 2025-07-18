import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())

app.use(cors())


// Routes import.

import { router } from "./src/routes/user.routes.js"
import { transactionRoute } from "./src/routes/transaction.routes.js"
import { accoutDetails } from "./src/routes/account.routes.js"

app.use("/api/v1/user",router)
app.use('/api/v1/accounts', accoutDetails)
app.use('/api/v1/transaction', transactionRoute)


export { app }