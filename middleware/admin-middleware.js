const adminMiddleware =async(req ,res ,next)=>{
    try{
        if(!req.user.isAdmin){
            return res.status(401).json({message: 'Unauthorized'})
        }
        next()
    }catch(error){
        next(error)
    }
}

module.exports = adminMiddleware