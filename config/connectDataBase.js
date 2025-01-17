const mongoose = require('mongoose')

module.exports = async function connectDataBase() {

    try {

        const DB_URL = process.env.DB_URL
        const connection = await mongoose.connect(DB_URL)
        if (connection) console.log('Database connected')
    } catch (error) {

        console.log(error)
    }
}

