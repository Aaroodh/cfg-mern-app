import express from 'express'
import { getAllUser, login, signup } from '../controllers/user-controller.js';
import { uploadProductImage} from '../controllers/uploadsContoller.js'
const router = express.Router();


router.route('/').get(getAllUser)
router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/uploads').post(uploadProductImage);

export default router