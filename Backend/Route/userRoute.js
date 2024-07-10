const express = require('express')
const userRoute = express.Router()
const userController = require('../Controller/userController')

const { registerPost} = userController

userRoute.post('/register', registerPost)

module.exports = userRoute