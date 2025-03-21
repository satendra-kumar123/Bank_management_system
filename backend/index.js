import { dbconnection } from "./src/DB/dbConnection.js";
import { app } from "./app.js";
import dotenv from "dotenv"

dotenv.config()

dbconnection()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Database is successfully listen on the server.")
    })
})
.catch((error) => {
    console.log("your db connection is successfull but db can not listen on the server", error)
})