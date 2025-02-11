const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address " + value)
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Not secure! please create a strong password")
            }
        }
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
    photoUrl: {
        type: String,
        default: "https://via.placeholder.com/150",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid photo url " + value)
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