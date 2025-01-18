const jwt = require('jsonwebtoken')

function verify_jwt_token(req, res, next) {

    try {

        const user_token = req.headers.token
        console.log('verify token -->', user_token)

        if (!user_token) {

            res.status(401).json({
                status: 401,
                error: "Unauthorized",
                message: "Authorization token is missing. Please provide a valid token to access this resource."
            })
            return
        }

        const verified_token = jwt.verify(user_token, process.env.JWT_SECRET_KEY)
        // console.log(verified_token)

        if (!verified_token) {

            res.status(401).json({
                "status": 401,
                "error": "Unauthorized",
                "message": "Invalid credentials. Please check your username and password and try again."
            })
            return
        }

        req.id = verified_token.user_id
        // console.log('verify token -->', verified_token)
        next()

    } catch (error) {
        console.log(error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

module.exports = { verify_jwt_token }