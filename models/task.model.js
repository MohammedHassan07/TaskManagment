const { model, Schema } = require('mongoose')

const taskSchema = new Schema({

    user: Schema.Types.ObjectId,
    title: String,
    description: String,
    status: {
        type: String,
        default: 'pending'
    }
}, { timestamps: true })

const taskModel = model('task', taskSchema)
module.exports = taskModel