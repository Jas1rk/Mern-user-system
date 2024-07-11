const express = require('express')
const adminRoute = express.Router()
const adminController = require('../Controller/adminController')

const {adminLogin} = adminController

adminRoute.post('/login',adminLogin)


module.exports = adminRoute



