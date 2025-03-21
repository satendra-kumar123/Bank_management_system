import mongoose from "mongoose";
import { dbName } from "../../constant.js";

async function dbconnection() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URI}/${dbName}`)
        console.log(`${process.env.MONGOOSE_URI}/${dbName}`)
        console.log("Your database connection is successfully done at ",connectionInstance.connection.host)
    } catch (error) {
        console.log("Error occured", error)
    }
}

export {dbconnection}