const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Data base connected");
  } catch (error) {
    console.log(error, "Data base connection failed");
  }
};

module.exports = connectDB;
