const Pokemon = require("../models/Pokemon");

exports.addPokemon = async (req, res) => {
  const newPokemon = new Pokemon({
    ...req.body,
  });

  try {
    const pokemon = await newPokemon.save();
    res.status(203).json({ msg: "Pokemon added successfully", pokemon });
  } catch (error) {
    console.log("add Pokemon failed", error);
    res.status(403).json({ errors: [{ msg: "Add Pokemon failed" }] });
  }
};

exports.fetchPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json({ msg: "Fetch pokemons with success", pokemons });
  } catch (error) {
    res.status(401).json({ errors: [{ msg: "Fetch pokemons failed" }] });
  }
};
