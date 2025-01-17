// create hospital profile --> success
async function createUser(req, res) {

    try {

        const {
            email, password
        } = req.body

        // console.log(req.file)

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(password)

        const hospital_data = new hospitalModel({
            email, password: hashPass
        })

        const data = await hospital_data.save()
        res.status(201).json({
            "status": 201,
            "message": "User registered successfully.",
            data: data
        })

    } catch (error) {

        console.log('crearte profile --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
        return
    }
}

// Login Hospital
async function userLogin(req, res) {

    try {

        const {
            email,
            password } = req.body

        // console.log('hospital-logIn --> ', req.body)

        const data = await hospitalModel.findOne({ email })
        if (!data) {

            return res.status(404).json({
                "status": 404,
                "error": "Not Found",
                "message": "The requested data was not found."
            })
        }

        // console.log('login --> ', data)

        // check password
        const verified = await compare_password(password, data.password)
        if (!verified) {

            res.status(401).json({
                "status": 401,
                "error": "Unauthorized",
                "message": "Invalid credentials. Please check your username and password and try again."
            })
            return
        }

        // generate token
        const token = await generate_token(data._id)
        if (!token) {

            res.status(500).json({
                "status": 500,
                "error": "Internal Server Error",
                "message": "An error occurred while attempting to save the data. Please try again later."
            })
            return
        }
        res.status(200).json({
            "status": 200,
            "message": "Login successful.",
            "data": {
                "email": email,
                "token": token
            }
        })

    } catch (error) {

        console.log('login --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

module.exports = {
    createUser,
    userLogin
}