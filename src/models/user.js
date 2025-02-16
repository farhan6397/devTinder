const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

userSchema.methods.getJWT = async function(){
    const user = this;

    const token = jwt.sign({ _id: user._id }, "farhanDev#@%$",
        { expiresIn: "7d" });
    return token;
}
userSchema.methods.validatePassword = async function(passwordInputByUser) {
    const user = this;
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash)
    return isPasswordValid;
}

const User = mongoose.model("User", userSchema)

module.exports = User;