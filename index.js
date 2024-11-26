require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/route')
require('./database/dbconnection')

const bpServer = express()

bpServer.use(cors())
bpServer.use(express.json())
bpServer.use(router)
bpServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

bpServer.listen(PORT,()=>{
    console.log(`bpServer started at port ${PORT} and waiting for client request!!!`);
})

bpServer.get("/",(req,res)=>{
    res.status(200).send(`<h1>bpServer started at port and waiting for client request</h1>`)
})
