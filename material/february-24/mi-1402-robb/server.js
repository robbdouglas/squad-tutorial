// ALLE IMPORTS (hier express und dotenv)

import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routers/users.js";

// express in der Variable app speichern

const app = express();

// ________MIDDLEWARE________

app.use(express.json()); // damit wir mit json arbeiten können
app.use("/users", usersRouter) // damit wir die users.js Datei einbinden können (routing)

// ________ROUTES________

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("Hellooooo!");
});

// ________DOTENV CONFIG, PORT, LOGS & LISTEN________

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
