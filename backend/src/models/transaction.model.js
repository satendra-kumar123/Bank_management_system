import mongoose from "mongoose";
import { Account } from "./account.model.js";
const transactionSchema = new mongoose.Schema({
    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: function () {
            return this.type !== 'deposit'; // deposit ke case me fromAccount zaroori nahi
        }
    },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: function(){
            return this.type !== "withdraw"
        }
    },
    amount: {
        type: Number,
        required: true,
        min: [1, "Amount must be atleast 1 Rs"]
    },
    transactionType: {
        type: String,
        enum: ["deposit","withdraw","transfer"],
        required: true
    },

}, {timestamps: true})

export const Transaction = mongoose.model('Transaction', transactionSchema)