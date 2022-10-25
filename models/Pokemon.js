const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  num: String,
  name: String,
  img: String,
  type: Array,
  height: String,
  weight: String,
  candy: String,
  candy_count: String,
  egg: String,
  spawn_chance: String,
  avg_spawns: String,
  spawn_time: String,
  multipliers: Array,
  weaknesses: Array,
  next_evolution: Array,
});

module.exports = mongoose.model("Pokemons", pokemonSchema);
