import express from 'express'
import userController from '../controller/user.js'
const router = express.Router()

router.get('/',userController.getUsers)
router.get('/:id',userController.getUsersById)
router.post('/',userController.addUsers)
router.delete('/:id',userController.deleteUser)
router.put('/:id',userController.editUser)



export default router