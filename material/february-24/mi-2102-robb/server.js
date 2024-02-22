import dotenv from "dotenv"; // dotenv immer zuerst importieren
import express from "express";
import "./db.js";
import { pokemonsRouter } from "./routes/pokemonsRoute.js";

const app = express();
dotenv.config();
app.use(express.json());

// _________ROUTING_______________

app.use("/pokemons", pokemonsRouter);

// _________PORT & LISTEN_________

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
