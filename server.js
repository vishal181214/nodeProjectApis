const express = require('express');
const app = express();
const data1 = require("./Routes/Bollywood")
const data2 = require('./Routes/Fitness')
const data3 = require('./Routes/Food')
const data4 = require('./Routes/Hollywood')
const data5 = require('./Routes/Nature')
const data6 = require('./Routes/Tehnology')
const cors = require('cors')

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use('/home', data1);
app.use('/home', data2)
app.use('/home', data3)
app.use('/home', data4)
app.use('/home', data5)
app.use('/home', data6)
app.listen(process.env.PORT||8080,()=>{
    console.log("server running");
})
