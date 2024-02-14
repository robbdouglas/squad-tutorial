// express importieren

import express from "express";

// router definieren

const router = express.Router();

// middleware definieren (falls mit json gearbeitet wird, für req.body)

router.use(express.json());

// users array definieren

const users = [
  { id: 1, name: "Hamze" },
  { id: 2, name: "Emanuela" },
  { id: 3, name: "Robb" },
];

// ALL users (get)

router.get("/", (req, res) => {
  res.status(200).json(users);
});

// user by id (get)

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ message: `Error 400: Bad Request` });
    console.log(`Error ${res.status(400).statusCode}: Bad Request`);
  } else {
    const user = users.find((user) => user.id === id);
    if (user) {
      res.status(200).json(user);
      console.log(`Status ${res.status(200).statusCode}: user found:`, user);
    } else {
      // Return status code 404 for non-existent ids
      res.status(404).json({ message: "user not found" });
      console.log(`Error ${res.status(404).statusCode}: user not found`);
    }
  }
});

// create user (post)

router.post("/create", (req, res) => {
  const newUser = req.body;
  const userToAdd = {
    id: users.length + 1, // fortlaufende ID
    name: req.body.name,
  };
  users.push(userToAdd);
  res.status(200).json(newUser);
  console.log("newUser:", newUser);
  console.log("users:", users);
  console.log(
    `Status ${res.status(200).statusCode}: New user added: `,
    userToAdd
  );
});

export default router;
