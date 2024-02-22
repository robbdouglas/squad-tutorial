// pokemonsRoute.js

import express from "express";
import {
  getAllPokemons,
  addPokemon,
  updatePokemonSingle,
  updatePokemonAll,
  deletePokemon,
} from "../controllers/pokemonsControllers.js";

const pokemonsRouter = express.Router();

pokemonsRouter
  .get("/", getAllPokemons)
  .post("/add", addPokemon)
  .patch("/update-single", updatePokemonSingle)
  .put("/update-all", updatePokemonAll)
  .delete("/delete", deletePokemon);

export { pokemonsRouter };
