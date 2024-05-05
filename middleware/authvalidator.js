const {z} = require('zod')

const schema = z.object({
    name: 
        z.string({
            message: 'Name is required'
        }).min(3, {
            message: 'Name must be at least 3 characters long'
        }).max(20, {
            message: 'Name must not be more than 255 characters long'

        }).trim(),
   email: 
        z.string({
            message: 'email is required'
        }).trim(),
  password: 
        z.string({
            message: 'password is required'
        }).min(6, {
            message: 'password must be at least 3 characters long'
        }).max(20, {
            message: 'password must not be more than 255 characters long'

        }).trim(),
       
    

})

module.exports =schema