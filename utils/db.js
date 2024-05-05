const mongoose = require('mongoose');



const connectDB= async() =>{
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/thapalms')
      console.log("DB connected successfully")
    }catch(err){
    console.log('databse coonection failed')
    process.exit(0)
    }
}

module.exports=connectDB;