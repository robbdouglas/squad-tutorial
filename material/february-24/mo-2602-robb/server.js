// server.js

import express from "express";
import dotenv from "dotenv";
import "./db-connect.js";
import footballPlayersRouter from "./routes/footballPlayersRoute.js";


const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// _______________MIDDLEWARE____________________

app.use(express.json());

// _______________ROUTES____________________

app.use("/football-players", footballPlayersRouter);

// _______________PORT & LISTEN____________________

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
