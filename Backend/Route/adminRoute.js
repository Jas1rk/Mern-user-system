const express = require('express')
const adminRoute = express.Router()
const adminController = require('../Controller/adminController')
const {tokenVerify} = require('../Config/jwt')

const {adminLogin,getusers} = adminController

adminRoute
    .post('/login',adminLogin)
    .get('/getuser',tokenVerify,getusers)


module.exports = adminRoute



