const express = require('express')
const app = express()
const router = require('./router/router')
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'./client')))

app.use(router);


app.listen(3000,()=>console.log('connected Successfully'))