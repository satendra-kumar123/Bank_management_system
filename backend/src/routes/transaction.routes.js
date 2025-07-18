import { Router } from "express";
import { depositMoney, withdrawMoney, transferMoney, getTransactionHistory } from "../controllers/transactionHistory.controller.js";

const transactionRoute = Router()

transactionRoute.route('/deposit').post(depositMoney)
transactionRoute.route('/withdraw').post(withdrawMoney)
transactionRoute.route('/transfer-money').post(transferMoney)
transactionRoute.route('/transaction-history').get(getTransactionHistory)


export {transactionRoute}