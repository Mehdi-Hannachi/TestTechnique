const { points } = require("../helpers/generalFunctions");
const Figth = require("../models/Figth");
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
    res
      .status(200)
      .json({ msg: "Fetch pokemons with success", pokemons: result });
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
    res
      .status(200)
      .json({ msg: "Fetch pokemons with success", pokemons: result });
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

exports.pokemonsFigth = async (req, res) => {
  const newFigth = new Figth({
    ...req.body,
  });

  const myPokemon = await Pokemon.findOne({ name: req.body.myPokemon });
  const enemyPokemon = await Pokemon.findOne({ name: req.body.enemyPokemon });

  const myresult = points(myPokemon.type, enemyPokemon.weaknesses);
  const enemyresult = points(enemyPokemon.type, myPokemon.weaknesses);

  await newFigth.save();

  try {
    if (myresult > 0) {
      res.status(200).json({ result: "Win" });
    } else if (myresult == 0 && enemyresult > 0) {
      res.status(200).json({ result: "Lose" });
    } else if (myresult == enemyresult) {
      res.status(200).json({ result: "Draw" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Fight canceled" });
  }
};
