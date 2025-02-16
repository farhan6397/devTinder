const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user')
const { validateSignUpData } = require('./utils/validation')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const { userAuth } = require('./middlewares/auth')

const app = express();
// middleware
app.use(express.json());
app.use(cookieParser());

// signup
app.post("/signup", async (req, res) => {

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
app.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const user = await User.findOne({ emailId: emailId })
        if (!user) {
            throw new Error("Invalid Credentials")
        }
        const isPasswordValid = await user.validatePassword(password)

        if (isPasswordValid) {
            const token = await user.getJWT();
          
            res.cookie("token", token, {expires: new Date(Date.now() + 8*3600000)      
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
// Get profile

app.get("/profile", userAuth, async (req, res) => {
    try {
        const user = req.user;
        res.send(user)
    } catch (err) {
        res.status(400).send("ERROR : " + err.message)
    }
})

// send connection request
app.post("/sendConnectionRequest", userAuth, async (req, res) => {
    const user = req.user;

    res.send("request send!")
})
// // Get user by emailId
// app.get("/user", async (req, res) => {
//     const userEmail = req.body.emailId;
//     try{
//         const user = await User.find({emailId: userEmail})
//         if(user.length<1){
//             res.status(404).send("user not found")
//         }
//         else {
//             console.log("user fetch successfully")
//            res.send(user) 
//         }    
//     } catch(err) {
//         res.status(400).send("Error saving the data" + err.message)
//     }
// })
// // Get all the users
// app.get("/feed", async (req, res) => {

//     try{
//         const users = await User.find({})
//         res.send(users)
//     } catch(err) {
//         res.status(400).send("something went wrong" + err.message)
//     }

// })

// // Find by id and Delete

// app.delete("/user", async (req, res) => {
//     const userId = req.body.userId;

//     try{
//         const user = await User.findByIdAndDelete(userId)
//         res.send("user delete successfully!")
//     } catch(err) {
//         res.status(400).send("something went wrong" + err.message)
//     }
// })
// // Update a user And add validation
// app.patch("/user/:userId", async (req, res) => {
//     const userId = req.params?.userId;
//     const data = req.body;
//     try{
//         const ALLOWED_UPDATES = [
//             "photoUrl",
//             "about",
//             "gender",
//             "age",
//             "skills"
//         ];
//         const isUpdateAllowed = Object.keys(data).every((k) => 
//             ALLOWED_UPDATES.includes(k)
//         );
//         if(!isUpdateAllowed){
//             throw new Error("Update not allowed! ")
//         }
//         if(data?.skills.length > 3){
//             throw new Error("skills cannot be more than 3")
//         }
//         await User.findByIdAndUpdate({_id: userId}, data, {
//             returnDocument: "after",
//             runValidators: true,
//         })  
//         res.send("user updated successfully!")
//     } catch(err) {
//         res.status(400).send("something went wrong " + err.message)
//     }
// })

connectDB()
    .then(() => {
        console.log("Database connection is established!")
        app.listen(3000, () => {
            console.log("server started");
        })
    })
    .catch((err) => {
        console.error("Database is not connected! " + err.message);

    })