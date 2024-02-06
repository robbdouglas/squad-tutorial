// alle imports

import express, { json } from "express";
import fs from "node:fs";

// Immer NUR import ODER require, nie beides!!!!!!!!!!!!!!

// alle consts

const app = express();
const port = 3000;
const filePath = "./data.json";

// alle middleware

app.use(express.json()); // middleware, die sagt: "Hey, wenn du JSON-Daten bekommst, dann verarbeite sie und mache sie für mich verfügbar"

// function, die alle Endpoints loggt (für schnellen Zugang)

const logEndPoints = () => {
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      const url = `http://localhost:${port}${r.route.path}`;
      console.log(url);
    }
  });
};

// app.listen (am besten ganz unten in der server.js)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logEndPoints();
});

// an dieser Stelle nodemon server.js starten und testen, ob der Server läuft

// alle routes

// basic route

app.get("/", (req, res) => {
  const greeting = "Hello World!";
  res.send(greeting);
  console.log("Server says: " + greeting);
});

// get request

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);
  res.send(`Your random number is: ${randomNumber}`);
  console.log("Server says: " + `Your random number is: ${randomNumber}`);
});

// get request, um die Daten aus der data.json zu holen (die data.json ist ein Array von Objekten, sie ist die DATENBANK)

app.get("/users", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (JSON.parse(data).length === 0) {
      res.json({ message: "No users found" });
      return;
    }
    res.send(JSON.parse(data));
    console.log(data);
  });
});

// nun die post request, um neue Daten in die data.json zu schreiben (mit curl und fs)

// Befehl in der Konsole: curl -X POST -H "Content-Type: application/json" -d '{ "id": "2", "name": "Bernd", "email": "ffhawifh" }' http://localhost:3000/users
// dazu add-user.sh erstellen und ausführbar machen mit chmod +x add-user.sh (permission denied)

app.post("/users", (req, res) => {
  const newUser = req.body;
  fs.readFile(filePath, "utf8", (err, data) => {
    const users = JSON.parse(data);
    newUser.id = users.length + 1; // id wird fortlaufend vergeben
    users.push(newUser);
    fs.writeFile(filePath, JSON.stringify(users), (err) => {
      res.json({ message: "User added" });
    });
  });
});

// Code von Hamze für UUID (random ID)

// app.post("/users", (req, res) => {
//   const newUser = req.body;
//   const data = fs.readFileSync(filePath, "utf8");
//   const users = JSON.parse(data);
//   const id = crypto.randomUUID();
//   newUser.id = id;
//   users.push(newUser);
//   fs.writeFileSync(filePath, JSON.stringify(users));
//   res.json({ msg: "user added successfuly" });
// });
