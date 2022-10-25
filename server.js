require("dotenv").config({ path: "./config/.env" });
const pokemons = require("./routes/pokemons");
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
//parse date
app.use(express.json());

// connect data base
connectDB();

//Routes
app.use("/pokemons", pokemons);

//connect server
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log("Server connected successfully");
});
