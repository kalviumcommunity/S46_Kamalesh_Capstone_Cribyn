const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
  try {
    res.json({ name: "User1" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
