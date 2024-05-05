


const validate =(schema) => async (req ,res, next)=>{
   try{
   let data = req.body
    const parseBody = await schema.parseAsync(data);
    req.body = parseBody;
    next()

   }
   catch(err){
    const message =err.errors[0].message
    console.log(message)
    const error ={
        status: 400,
        message: message
    }
    next(error)
   }
}

module.exports = validate;