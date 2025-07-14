import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true,"Username must be required"],
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 50
    },
    mobileNo: {
        type: Number,
        required: [true, " Mobile number must be required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    addharNO: {
        type: Number,
        required: [true, " Aadhar number is required"],
        unique: true
    },
    PAN: {
        type: String,
        required: [true,"PAN card is required"],
        unique: true
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        lowercase: true,

    },
    photo:{
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema)