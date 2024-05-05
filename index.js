const express = require('express')
const app =express()
const cors =require('cors')
const corsOption ={
    origin: 'https://lms2-client.vercel.app',
    method:"GET ,POST , PUT , DELETE ,PATCH ,HEAD",
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOption));
require('dotenv').config();
const port = 3000;
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');


const router = require('./routes/auth-router');
const contactRoter = require('./routes/contact-router')
const serviceRouter = require('./routes/service-router')
const adminRouter = require('./routes/admin-route')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/' ,(req ,res)=>{
    res.send('pong')
})
app.use('/api/auth' , router)
app.use('/api', contactRoter)
app.use('/api', serviceRouter )
app.use('/admin' , adminRouter)

app.use(errorMiddleware)

connectDB().then(()=>{
    app.listen(port , ()=>{
        console.log(`server is running on port http://localhost:${port}`)})
})