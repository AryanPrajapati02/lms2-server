const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
       
        default: false
    }
})

userSchema.methods.generateToken = async function(){
   try{
    return jwt.sign({
        userId: this._id,
        name: this.name,
        email: this.email,
        isAdmin: this.isAdmin
    } , "secret" , {expiresIn: '7d'})
   }catch(e){
    console.log(e);
   }
}


const User = new mongoose.model('User', userSchema);

module.exports = User; 