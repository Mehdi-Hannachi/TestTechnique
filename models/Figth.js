const mongoose = require("mongoose");

const figthSchema = new mongoose.Schema({
  myPokemon: String,
  enemyPokemon: String,
});

module.exports = mongoose.model("Figths", figthSchema);
