import {Router} from 'express'
import { createAccount, getAccountDetails } from '../controllers/account.controller.js'

const accoutDetails = Router()

accoutDetails.route('/create-account').post(createAccount)
accoutDetails.route('/account-details').get(getAccountDetails)

export { accoutDetails }