const express=require('express')
require('dotenv').config({path:"./config.env"})
const PORT=process.env.PORT
// const cookieparser=require("cookie-parser")
const app=express()
require("./db/conn")

app.use(express.json())
// app.use(cookieparser())
 
app.use(require('./router/routes'))
app.listen(PORT,()=>{
    console.log("listening at "+PORT)
}) 
