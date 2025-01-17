const express = require('express')
const connectDataBase = require('./config/connectDataBase')
require('dotenv').config()

const app = express() 

const PORT = process.env.PORT
app.listen(PORT, () => {

    console.log('Server is up at ', PORT)
    connectDataBase()
})