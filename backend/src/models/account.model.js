import mongoose from "mongoose";
import { User } from "./user.model.js";
const accountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        unique: true,
        minlength: 8,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        required: true
    },
    accountType: {
        type: String,
        enum: ["Saving", "Current", "FD"],
        required: true
    },
    balance: {
        type: Number,
        required: true
    }

},{timestamps: true})

export const Account = mongoose.model("Account", accountSchema)