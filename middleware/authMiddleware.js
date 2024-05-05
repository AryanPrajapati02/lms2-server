const jwt = require('jsonwebtoken')
const User = require('../models/user-model')

const authMiddleware = async( req ,res ,next)=>{
  const token = req.header('Authorization');
  if(!token){
    return res.status(400).send({error: 'Please provide token'})
  }
   const jwtToken = token.replace('Bearer' , "").trim();
    try{
     const user = jwt.verify(jwtToken , "secret");
   const userData = await User.findOne({email : user.email}).select({
    password: 0,
   })
   req.user = userData;
   req.token= token;
   req.userID = userData._id;

    console.log(userData)
     next()
    }catch(e){
      return res.status(400).send({message: 'Invalid token'})
    }
 
 
}
module.exports = authMiddleware