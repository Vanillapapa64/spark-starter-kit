const express= require('express');
const app=express();
const bodyparser=require('body-parser')
const cors=require('cors');
const rootrouter=require('./routes/index')
app.use(cors())
app.use(bodyparser.json())
app.use(express.json())
app.use("/api/v1",rootrouter)
app.listen(3000)
console.log("outer index.js started running at 3000 port")