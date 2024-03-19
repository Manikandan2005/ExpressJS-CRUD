import express from 'express'
import IndexController from '../controller/index.js'
import userRoutes from './user.js'
const router = express.Router()

//for home page
router.get('/',IndexController.homePage)


//other router

router.use('/user',userRoutes)


export default router