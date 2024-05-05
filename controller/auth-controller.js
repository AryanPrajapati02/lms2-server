const User = require('../models/user-model');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken')

const home =async(req, res)=>{
    res.status(200).send('home')
}

const register = async (req, res) => {
    try{
      
       const {name, email, password} = req.body;
      //  console.log(req.body)
       if(!name ||!email ||!password){
           return res.status(400).send({error: 'Please provide name, email and password'})
       }
       const existingUser = await User.findOne({email});
       if(existingUser){
        return res.status(400).send({error: 'User already exists'})
       }
       const salt = 5;
       const hashedPassword = await bcrypt.hash(password, salt);
  

       const user = await User.create({name, email, password : hashedPassword});
        res.status(201).json({
        msg:"user created successfully",
        token: await user.generateToken()
       });

    }catch(error){
     next(error)
    }
}

const login = async (req, res) => {
try{
  const {email , password} = req.body;
  console.log(req.body)
  if(!email ||!password){
    return res.status(400).send({error: 'Please provide email and password'})
  }
  const user = await User.findOne({email})
  if(!user){
    return res.status(400).send({error: 'User does not exist'})
  }
 const passwordMatch = await bcrypt.compare(password , user.password )

 
 if(passwordMatch){
  res.status(201).json({
    msg: 'login successful',
    token: await user.generateToken(),
    userId: user._id,
  })
 }
 else{
  res.status(400).send({error: 'invaild'})
 }

}catch(error){
  res.status(400).send({error: error.message})
}
}

const user = async( req ,res)=>{
  try{
     const userData = req.user;
     res.status(200).send(userData)
  }catch(e){
    res.status(400).send({error: e.message})
  }
}

module.exports = {
    login,
    home,
    register,
    user
}