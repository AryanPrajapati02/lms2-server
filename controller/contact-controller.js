const Contact = require('../models/contact-model')

const contactForm = async (req ,res)=>{

    try{
        const {name ,email , message} = req.body;
        if(!name ||!email ||!message){
            return res.status(400).send({error: 'Please provide name, email and message'})
        }
        const newContactForm =await Contact.create({
            name,
            email,
            message
        })
        await newContactForm.save();
        res.status(201).send({message: 'Message sent successfully'})
    }catch(error){
        res.status(500).send({error: error.message})
    }
}

module.exports = contactForm