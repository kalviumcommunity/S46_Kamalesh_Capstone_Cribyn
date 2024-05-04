const express = require("express");
const app = express();
const cors = require("cors");
const { HouseProperty, User } = require("./schemas.js");
app.use(express.json());
app.use(cors());

// To access All the USERS ✔️
app.get("/allusers", async (req, res) => {
  const users = await User.find();
  res.status(201).json(users);
});

// To access All the POSTS ✔️
app.get("/allposts", async (req, res) => {
  const users = await HouseProperty.find();
  res.status(201).json(users);
});

module.exports = app;
