const express = require('express')
const adminRoute = express.Router()
const adminController = require('../Controller/adminController')
const {verifyToken} = require('../Config/jwt')

const {adminLogin,getusers} = adminController

adminRoute
    .post('/login',adminLogin)
    .get('/getuser',getusers)


module.exports = adminRoute



