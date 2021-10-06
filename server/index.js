const cors = require('cors')
const { default: axios } = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000
app.use(express.json())
app.use(cors()) // fix security issues header 
// app.use(bodyParser.json())
// app.use(.urlencoded({extends:false}))
// app.use(bodyParser());



app.post('/post',(req,res)=>{
    console.log(req.body)
    res.send('succeess !!!')
})


app.get('/checker/',(req,res)=>{
    const val =req.query.value
    console.dir(val)
    list.push(val)
    console.log('checked')
   
})

app.listen(port,()=>{
    console.log(`the server is running on port num ${port}`)
})
