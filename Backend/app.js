const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const mongoDbConnect = require('./Config/db')
mongoDbConnect()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const Port = process.env.PORT
app.listen(Port,()=>{
    console.log('server is running')
})