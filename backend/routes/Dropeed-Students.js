import express from 'express'
import { getAllUser, login, signup } from '../controllers/Dropped-students-controller.js'
const router = express.Router();


router.route('/').get(getAllUser)
router.route('/signup').post(signup)
router.route('/login').post(login)

export default router