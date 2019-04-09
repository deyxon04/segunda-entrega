'use strict'

const router = require('express').Router()
const userController = require('../controllers/user/user')

router.post('/login',userController.login)
router.post('/adduser',userController.addUser)


module.exports = router
