const express = require('express')
const isEmpty = require('../middleware/isEmpty')
const { verify_jwt_token } = require('../middleware/verifyToken')
const { addTask, updateTaskStatus, deleteTask, getTask } = require('../controllers/task.controller')

const taskRoute = express.Router()

taskRoute.use(verify_jwt_token)

taskRoute.get('/tasks', getTask)

taskRoute.post('/tasks', addTask)

taskRoute.put('/tasks/:id', updateTaskStatus)

taskRoute.delete('/tasks/:id', deleteTask)

module.exports = taskRoute