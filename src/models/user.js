const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        validate(value){
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Please Enter a valid Gender")
            }
        }
    },
    description: {
        type: String,
        default: "this is default description"
    },
    skills: {
        type: [String],
    }

}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User;