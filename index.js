const express = require('express')
const app = express()

const userRouter = require('./routes/User')

app.use('/user',userRouter)

app.listen(3005,()=>{
    console.log('Server is running')
})

