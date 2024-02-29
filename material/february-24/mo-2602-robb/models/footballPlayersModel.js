// footballPlayersModel.js

import { Schema, model } from "mongoose";

// subscheme for previousClubs

const previousClubsSchema = new Schema({
  numberOfPreviousClubs: Number,
  namesOfPreviousClubs: [String],
});

const footballPlayersSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  birthday: { type: Date, required: true },
  club: {
    type: String,
    default: "Borussia Dortmund",
  },
  playerNumber: Number,
  position: String,
  previousClubs: {
    type: previousClubsSchema,
    _id: false,
  },
});

export const footballPlayer = model("footballPlayer", footballPlayersSchema);

// dummy post request
