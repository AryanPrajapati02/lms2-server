const mongoose = require('mongoose');

const url = process.env.DB_URI


const connectDB= async() =>{
    try{
      await mongoose.connect(url)
      console.log("DB connected successfully")
    }catch(err){
    console.log('databse coonection failed')
    process.exit(0)
    }
}

module.exports=connectDB;