const service = require('../models/service-model')

const services = async(req, res)=>{
try{
   const response  = await service.find({})
   if(!response){
    return res.status(404).send({error: 'No service found'})
   }
   res.status(200).json({msg : response })

}catch(e){
    res.status(500).send({error: 'Internal server error'})
}
}

module.exports = {
    services
}