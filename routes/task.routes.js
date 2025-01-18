const express = require('express')
// const isEmpty = require('../middleware/isEmpty')
const { verify_jwt_token } = require('../middleware/verifyToken')
const { addTask, updateTaskStatus, deleteTask, getTask } = require('../controllers/task.controller')

const taskRoute = express.Router()


taskRoute.get('/tasks', verify_jwt_token, getTask)

taskRoute.post('/tasks', verify_jwt_token, addTask)

taskRoute.put('/tasks/:id', verify_jwt_token, updateTaskStatus)

taskRoute.delete('/tasks/:id', verify_jwt_token, deleteTask)

module.exports = taskRoute