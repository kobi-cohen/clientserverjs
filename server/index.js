const cors = require('cors')
const { default: axios } = require('axios')
const express = require('express')

const app = express()

const port = 3000

app.use(cors()) // fix security issues header 

const axreq = async (url) =>{
    const r1 = await axios.get(url)
    console.log('from async ' + r1.data)
}

app.get ('/',(req,res)=>{
   
    res.send(`Welcome`)
})


app.get('/checker/',(req,res)=>{
    console.dir(req.query.value)
    console.log('checked')
    res.send('great!')
})

app.listen(port,()=>{
    console.log(`the server is running on port num ${port}`)
})
