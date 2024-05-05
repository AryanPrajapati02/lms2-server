const express = require('express');
const router = express.Router();
const {getAllUsers , getAllContacts , deleteUserById ,getUserById  ,updateUserById} = require('../controller/admin-controller')

const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/admin-middleware')
router.get("/user",  authMiddleware , adminMiddleware,getAllUsers )
router.get('/contact' , authMiddleware, adminMiddleware, getAllContacts )
router.get('/user/:id' , authMiddleware, adminMiddleware ,updateUserById )
router.patch('/user/update/:id' , authMiddleware, adminMiddleware ,getUserById )
router.delete('/user/delete/:id' , authMiddleware , adminMiddleware , deleteUserById)
module.exports = router;