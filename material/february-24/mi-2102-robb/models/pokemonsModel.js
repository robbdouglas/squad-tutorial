// pokemonsModel.js

import { model, Schema } from "mongoose";

const pokemonsSchema = new Schema({
  pokemonName: String,
  pokemonID: Number,
  pokemonType: [String],
});

export const Pokemon = model("pokemon", pokemonsSchema);