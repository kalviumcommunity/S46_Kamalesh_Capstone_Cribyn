const express = require("express");
const app = express();
const cors = require("cors");
const { HouseProperty, User } = require("./schemas.js");
const bcrypt = require("bcrypt");
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

// To create a new POST ✔️
app.post("/new-post", async (req, res) => {
  try {
    const newpost = new HouseProperty(req.body);
    const saved = await newpost.save();

    res.json(saved);
  } catch (err) {
    res.status(400).json(err);
  }
});

// To create a new USER (Signup)  ✔️
app.post("/new-user", async (req, res) => {
  try {
    let hashedpassword = await bcrypt.hash(req.body.password, 10);
    let user = {
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: hashedpassword,
    };
    if (req.body.profilePicture) {
      user.profilePicture = req.body.profilePicture;
    }
    const newUser = new User(user);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//  POST method for USER LOGIN ✔️
app.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    const passValidation = await bcrypt.compare(password, user.password);

    if (!passValidation) {
      return res.status(401).json({ message: "invalid Password" });
    }

    res.status(200).json({ message: "Login Successful", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = app;
