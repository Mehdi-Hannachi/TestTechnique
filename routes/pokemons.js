const express = require("express");
const Router = express.Router();
const {
  addPokemon,
  fetchPokemons,
  fetchPokemonByName,
  fetchPokemonsWeakTo,
  fetchPokemonsStrongTo,
} = require("../controllers/pokemons-controller");

//  http://localhost:5005/pokemons
// add new Pokemon
Router.post("/", addPokemon);

//  http://localhost:5005/pokemons
// Return all pokemons
Router.get("/", fetchPokemons);

//  http://localhost:5005/pokemons/weak/:typeName
// returns all pokemons that are weak to those element type
Router.get("/weak/:typeName", fetchPokemonsWeakTo);

//  http://localhost:5005/pokemons/strong/:typeName
// returns all pokemons that are strong to those element type
Router.get("/strong/:typeName", fetchPokemonsStrongTo);

//  http://localhost:5005/pokemons/:pokemonName
// return pokemon by name
Router.get("/:pokemonName", fetchPokemonByName);

module.exports = Router;
