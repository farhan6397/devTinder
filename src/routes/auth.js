const express = require('express')
const User = require('../models/user')
const { validateSignUpData } = require('../utils/validation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const authRouter = express.Router();

// signup
authRouter.post("/signup", async (req, res) => {

    try {
        // validation area
        validateSignUpData(req);

        const { firstName, lastName, emailId, password } = req.body;
        // Encrypt the data
        const passwordHash = await bcrypt.hash(password, 10)

        // creating the instance of the user model
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash
        })
        await user.save();
        res.send("User added successfully!")
    } catch (err) {
        res.status(400).send("ERROR : " + err.message)
    }
})

// Login
authRouter.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const user = await User.findOne({ emailId: emailId })
        if (!user) {
            throw new Error("Invalid Credentials")
        }
        const isPasswordValid = await user.validatePassword(password)

        if (isPasswordValid) {
            const token = await user.getJWT();

            res.cookie("token", token, {
                expires: new Date(Date.now() + 8 * 3600000)
            });

            res.send("User login successfully")
        }
        else {
            throw new Error("Incorrect Password")
        }
    } catch (err) {
        res.status(400).send("ERROR : " + err.message)
    }
})

// logout
authRouter.post("/logout", async (req, res) => {
    res.cookie("token", null,
        {
            expires: new Date(Date.now()),
        }
    )
    res.send("Logout Successfull!")
})

module.exports = authRouter;
