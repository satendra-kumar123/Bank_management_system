import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    addharNO: {
        type: Number
    },
    PAN: {
        type: String
    },
    address: {
        type: String
    },
    photo:{
        type: String,
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema)