const express = require('express')
const isEmpty = require('../middleware/isEmpty')
const { createUser, userLogin } = require('../controllers/user.controller')

const userRoute = express.Router()

userRoute.use(isEmpty)

userRoute.post('/create-profile', createUser)

userRoute.post('/login', userLogin)

module.exports = userRoute