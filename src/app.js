const express = require('express');
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile')
const requestRouter = require('./routes/request')

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)

// Get all the users
// app.get("/feed", async (req, res) => {

//     try{
//         const users = await User.find({})
//         res.send(users)
//     } catch(err) {
//         res.status(400).send("something went wrong" + err.message)
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
