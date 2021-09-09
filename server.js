// Old syntax (without "type": "module"):
// const express = require("express");
// New syntax (with "type": "module"):
import express from "express";
// cors => allow external endpoints to access database
import cors from "cors";
// morgan => logs
import morgan from "morgan";

//import database
import db from "./db/connection.js";

import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 4567;

// Middleware
// express.json gives access to req.body
app.use(express.json());
app.use(cors());
// Change morgan after deployment once everything works ('tiny')
app.use(morgan("dev"));

// Redirect routes with app.use()
app.use("/", routes)

db.on("connected", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, console.log(`Connected to port: ${PORT}`));
});
