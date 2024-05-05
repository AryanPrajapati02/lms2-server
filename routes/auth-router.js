const express =require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

const {login ,home ,register ,user} = require('../controller/auth-controller')
const validate = require('../middleware/validate-middleware')
const  schema  = require('../middleware/authvalidator')



router.get('/' ,home)
router.get('/user' ,authMiddleware , user )
router.get('/login' , login)
router.post('/login' , login)
router.get('/register' , register)
router.post('/register' , validate(schema), register)

module.exports = router