const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://farhan639718:farhandeveloper@farhandev.w1fj1.mongodb.net/devTinder"
  )
}

module.exports = connectDB;
