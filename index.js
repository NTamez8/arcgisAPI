const express = require('express')
const cors = require('cors')


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.static('static'))
app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/base.html')


})


app.listen(8080,()=>{console.log("listening on port 8080")})