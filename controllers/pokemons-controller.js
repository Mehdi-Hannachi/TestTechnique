const Pokemon = require("../models/Pokemon");

exports.addPokemon = async (req, res) => {
  const newPokemon = new Pokemon({
    ...req.body,
  });

  try {
    const pokemon = await newPokemon.save();
    res.status(203).json({ msg: "Pokemon added successfully", pokemon });
  } catch (error) {
    res.status(403).json({ errors: [{ msg: "Add Pokemon failed" }] });
  }
};

exports.fetchPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json({ msg: "Fetch pokemons with success", pokemons });
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "Fetch pokemons failed" }] });
  }
};

exports.fetchPokemonsWeakTo = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    const result = await pokemons.filter((pokemon) =>
      pokemon.weaknesses.find((el) => el == req.params.typeName)
    );
    res.status(200).json({ msg: "Fetch pokemons with success", result });
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "Fetch pokemons failed" }] });
  }
};

exports.fetchPokemonsStrongTo = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    const result = await pokemons.filter((pokemon) =>
      pokemon.type.find((el) => el == req.params.typeName)
    );
    res.status(200).json({ msg: "Fetch pokemons with success", result });
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "Fetch pokemons failed" }] });
  }
};

exports.fetchPokemonByName = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ name: req.params.pokemonName });
    res.status(200).json({ msg: "Fetch pokemon with success", pokemon });
  } catch (error) {
    res.status(400).json({ msg: "Fetch pokemon failed" });
  }
};


