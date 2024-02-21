import express from "express";
import dotenv from "dotenv";
import "./db.js";

const app = express();
dotenv.config();








// _________PORT & LISTEN_________

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

