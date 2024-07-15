const express = require('express')
const cors = require('cors')
const mintToken = require('./mintToken')
const app = express()
app.use(express.json())
app.use(cors())
app.listen(2000,()=>{
    console.log('Server is running');
})
app.post('/mintTokn',async(req,res)=>{
    console.log(req.body);
    try {
        var response = await mintToken(req.body)
        console.log(response,'response');
        
        
    } catch (error) {
        
    }


})