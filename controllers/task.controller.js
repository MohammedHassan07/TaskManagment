const taskModel = require("../models/task.model")

// get all tasks
async function getTask(req, res) {

    try {

        const userId = req.id

        const tasks = await taskModel.find({ user: userId })
        console.log(tasks)

        if (!tasks) return res.status(404).json({
            "status": 404,
            "error": "Not Found",
            "message": "The requested data was not found."
        })

        res.status(200).json({
            "status": 200,
            "message": "Tasks found.",
            "data": tasks
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

// add task
async function addTask(req, res) {

    try {

        const { title, description } = req.body

        const userId = req.id

        const task = new taskModel({
            user: userId,
            title,
            description
        })

        const data = await task.save()

        if (!data) {
            return res.status().json()
        }

        return res.status(201).json({
            "status": 201,
            "message": "Task added successfully.",
            "data": data
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

// update task
async function updateTaskStatus(req, res) {

    try {

        const taskId = req.params.id

        console.log('update ...')

        const task = await taskModel.findById({ _id: taskId })

        if (!task) return res.status(404).json({
            "status": 404,
            "error": "Not Found",
            "message": "The requested data was not found."
        })

        const newTask = taskModel.findByIdAndUpdate({ _id: taskId }, { status: '' })

        return res.status(200).json({
            "status": 200,
            "message": "Status updated successfully.",
            "data": newTask
        })
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

async function deleteTask(req, res) {
    try {

        const taskId = req.params.id

        const task = await taskModel.findById({ _id: taskId })

        if (!task) return res.status(404).json({
            "status": 404,
            "error": "Not Found",
            "message": "The requested data was not found."
        })

        const data = await taskModel.findOneAndDelete({ _id: taskId })

        return res.status(200).json({
            "status": 200,
            "message": "Login successful.",
            "data": {
                "userId": "12345",
                "username": "existinguser",
                "token": "jwt-token-or-session-id"
            }
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

module.exports = {
    getTask,
    addTask,
    updateTaskStatus,
    deleteTask
}