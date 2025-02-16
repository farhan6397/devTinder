const jwt = require('jsonwebtoken');
const User = require('../models/user')

const userAuth = async (req, res, next) => {
    try {
        // read the token from the cookies
        const { token } = req.cookies;
        if (!token) {
            throw new Error("Invalid token!")
        }

        // validate the token 
        const decodedObj = await jwt.verify(token, "farhanDev#@%$")
        const { _id } = decodedObj;

        // find the user
        const user = await User.findById(_id);
        if (!user) {
            throw new Error("User Not Found!")
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(400).send("ERROR : " + err.message)
    }
}

module.exports = {
    userAuth,
}

