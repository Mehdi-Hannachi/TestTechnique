const express = require("express");
const Router = express.Router();
const {
  addPokemon,
  fetchPokemons,
} = require("../controllers/pokemons-controller");

//  http://localhost:5005/pokemons
// add new Pokemon

Router.post("/", addPokemon);

//  http://localhost:5005/pokemons
// add new Pokemon

Router.get("/", fetchPokemons);

module.exports = Router;
