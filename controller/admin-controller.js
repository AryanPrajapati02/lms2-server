const User = require('../models/user-model')
const Contact = require('../models/contact-model')

const getAllUsers = async (req, res)=>{
    try{
        const users = await User.find({} , {
            password: 0
        })
       
       if(!users || users.length==0){
        return res.status(404).json({
            message: 'No users found'
        })
       }
       return res.status(200).json({
           users
       })
    }
    catch(err){
      console.log(err)
    }
}

const getAllContacts = async(req,res)=>{
    try{
        const contacts = await Contact.find({} , {
            password: 0
        })
       
       if(!contacts || contacts.length==0){
        return res.status(404).json({
            message: 'No contacts found'
        })
       }
       return res.status(200).json({
           contacts
       })
    }
    catch(err){
      console.log(err)
    }
}
const getUserById = async(req ,res)=>{
    const {id} = req.params;
    try{
        const user = await User.findById(id)
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        return res.status(200).json({
            user
        })
    }
    catch(err){
        next(err)
    }
}

const updateUserById =async(req, res) =>{
    const {id} = req.params;
    const updateUserData = req.body ;
    try{
        const user = await User.updateOne(id,{
            $set: updateUserData
        })
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        return res.status(200).json({
            user
        })
    }
    catch(err){
        next(err)
    }
}



const deleteUserById = async(req, res)=>{
const {id} = req.params;
try{
    const user = await User.findByIdAndDelete(id)
    if(!user){
        return res.status(404).json({
            message: 'User not found'
        })
    }
    return res.status(200).json({
        message: 'User deleted successfully'
    })
}
catch(err){
    console.log(err)
}
}

module.exports = {
    getAllUsers,
    getAllContacts,
    deleteUserById,
    getUserById,
    updateUserById
}