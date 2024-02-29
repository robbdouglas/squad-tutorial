// footballPlayersRoute.js

import express from "express";
import {
  getAllFootballPlayers,
  addFootballPlayer,
  deleteFootballPlayer,
} from "../controllers/footballPlayersControllers.js";

const footballPlayersRouter = express.Router();

footballPlayersRouter
  .get("/", getAllFootballPlayers)
  .post("/add", addFootballPlayer)
  .delete("/delete/:id", deleteFootballPlayer);

export default footballPlayersRouter;
