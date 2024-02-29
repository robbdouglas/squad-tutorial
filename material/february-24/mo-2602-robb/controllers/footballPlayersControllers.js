// footballPlayersControllers.js

import { footballPlayer } from "../models/footballPlayersModel.js";

export const getAllFootballPlayers = async (req, res) => {
  try {
    const footballPlayers = await footballPlayer.find();
    res.json(footballPlayers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const addFootballPlayer = async (req, res) => {
  try {
    const { name, age, birthday, club, playerNumber, position, previousClubs } =
      req.body;
    await footballPlayer.create({
      name,
      age,
      birthday,
      club,
      playerNumber,
      position,
      previousClubs,
    });
    res.json({ message: "Football player added successfully" });
    console.log(typeof previousClubs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
};

export const deleteFootballPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    await footballPlayer.findByIdAndDelete(id);
    res.json({ message: "Football player deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error 500" });
  }
}
