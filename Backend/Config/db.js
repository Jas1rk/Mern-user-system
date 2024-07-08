const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const mongoDbConnect = async()=>{
    try{
       await mongoose.connect(process.env.Mongo_Url) 
       console.log("Connected to database")
    }catch(err){
        console.log('MongoDb error',err)
    }
}

module.exports = mongoDbConnect