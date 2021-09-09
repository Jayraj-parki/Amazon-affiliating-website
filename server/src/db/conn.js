const mongoose = require('mongoose')
mongoose.connect(process.env.DB,
    // {
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }
)
.then(()=>{
    console.log("connection Successfull")
})
.catch((err)=>{   
    console.log("No connection:"+err)
})  