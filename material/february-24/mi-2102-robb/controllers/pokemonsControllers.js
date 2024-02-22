// pokemonsControllers.js

import { Pokemon } from "../models/pokemonsModel.js";

export const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const addPokemon = async (req, res) => {
  try {
    const { pokemonName, pokemonID, pokemonType } = req.body;
    await Pokemon.create({ pokemonName, pokemonID, pokemonType });
    res.json({ message: "Pokemon added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const updatePokemonSingle = async (req, res) => {
  try {
    const { pokemonName, pokemonID, pokemonType } = req.body;
    await Pokemon.updateOne({ pokemonName, pokemonID, pokemonType });
    res.json({ message: "Pokemon updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const updatePokemonAll = async (req, res) => {
  try {
    const { pokemonName, pokemonID, pokemonType } = req.body;
    await Pokemon.updateMany({ pokemonName, pokemonID, pokemonType });
    res.json({ message: "All Pokemons updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const deletePokemon = async (req, res) => {
  try {
    const { pokemonName } = req.body;
    await Pokemon.deleteOne({ pokemonName });
    res.json({ message: "Pokemon deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};
