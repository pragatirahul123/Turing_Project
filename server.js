const express=require('express')
const app = express()
app.use(express.json())




var call_api = require("./router/index")

app.use("/",call_api)

app.listen(6693,()=>{
    console.log(`SERVER IS RUNNING AT PORT 1234`);
})





