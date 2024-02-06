import { students } from "./data/students.js";

const express = require("express");
const app = express();

const server = app.listen(3005, () => {
  console.log("The server is listening... 🐒");
});

// - Erstelle eine Route für GET-Requests auf `/` und sende den Text "STARTSEITE" zurück

app.get("/", (req, res) => {
  res.send("STARTSEITE");
  console.log("Server sagt: STARTSEITE");
});

// - Erstelle eine Route für GET-Requests auf `/lotto` und sende sechs zufällig gezogene (Lotto-)zahlen zwischen 1 und 49 zurück

app.get("/lotto", (req, res) => {
  let lottoNumbers = [];
  for (let i = 0; i < 6; i++) {
    lottoNumbers.push(Math.floor(Math.random() * 49 + 1));
  }
  res.send(lottoNumbers);
  console.log("Server sagt: " + lottoNumbers);
});

// - Erstelle eine Route für GET-Requests auf `/randomStudent` und sende einen zufällig ausgewählten Namen aus dem Array `students` zurück. Dieses Array findest und erstellst du in der Datei `students.js`. Achte darauf, dass du die Datei mit export/import einbindest.

// const students = ["Robb", "Jan", "Emanuela", "Melle", "Norbert"];

app.get("/randomStudent", (req, res) => {
  let randomStudent = students[Math.floor(Math.random() * students.length)];
  res.send(randomStudent);
  console.log("Server sagt: " + randomStudent);
});
