require("dotenv").config({ path: "./config/.env" });
const pokemons = require("./routes/pokemons");
const express = require("express");
const connectDB = require("./config/connectDB");
const path = require('path');
const cors = require("cors");
const app = express();
//parse date
app.use(express.json());
app.use(cors());

// connect data base
connectDB();

//deploy script
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
//Routes
app.use("/pokemons", pokemons);

//connect server
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log("Server connected successfully");
});
