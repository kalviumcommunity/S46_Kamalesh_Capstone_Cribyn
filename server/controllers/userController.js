const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const { TokenGenerator } = require("../middlewares/UserAuthentication");

// To access All the USERS ✔️
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(201).json(users);
};

// To create a new USER (Signup)  ✔️
const registerNewUser = async (req, res) => {
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
    const token = await TokenGenerator(savedUser);
    res.status(201).json({ user: savedUser, token: token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//  POST method for USER LOGIN ✔️
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passValidation = await bcrypt.compare(password, user.password);

    if (!passValidation) {
      return res.status(401).json({ message: "invalid Password" });
    }

    const token = await TokenGenerator(user);

    res.status(200).json({ message: "Login Successful", user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// To Edit User Data  ✔️
const updateUser = async (req, res) => {
  const { userid } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(userid, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { registerNewUser, loginUser, updateUser, getAllUsers };
