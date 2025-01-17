const express = require('express')
const connectDataBase = require('./config/connectDataBase')
const taskRoute = require('./routes/task.routes')
const userRoute = require('./routes/user.routes')
require('dotenv').config()

const app = express() 
app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {

    console.log('Server is up at ', PORT)
    connectDataBase()
})

app.use(userRoute)
app.use(taskRoute)