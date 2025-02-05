const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user')
const app = express();
app.use(express.json()); // middleware

// Get user by emailId
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try{
        const user = await User.find({emailId: userEmail})
        if(user.length<1){
            res.status(404).send("user not found")
        }
        else {
            console.log("user fetch successfully")
           res.send(user) 
        }    
    } catch(err) {
        res.status(400).send("Error saving the data" + err.message)
    }
})
// Get all the users
app.get("/feed", async (req, res) => {
    
    try{
        const users = await User.find({})
        res.send(users)
    } catch(err) {
        res.status(400).send("something went wrong" + err.message)
    }

})

// Find by id and Delete

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;

    try{
        const user = await User.findByIdAndDelete(userId)
        res.send("user delete successfully!")
    } catch(err) {
        res.status(400).send("something went wrong" + err.message)
    }
})
// Update a user
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        await User.findByIdAndUpdate({_id: userId}, data, {
            runValidators: true,
        })  
        res.send("user updated successfully!")
    } catch(err) {
        res.status(400).send("something went wrong " + err.message)
    }
})

app.post("/signup", async (req, res) => {
    // creating the instance of the user model
    const user = new User(req.body) 
    
    try {
        await user.save();
        res.send("User added successfully!")
    } catch(err) {
        res.status(400).send("Error saving the data" + err.message)
    }
})

connectDB()
    .then(() =>  {
        console.log("Database connection is established!")
        app.listen(3000, ()=>{
            console.log("server started");
        })
    })
    .catch((err) => {
        console.error("Database is not connected! " + err.message);
        
    })