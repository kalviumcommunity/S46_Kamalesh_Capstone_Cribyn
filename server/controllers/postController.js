const { HouseProperty } = require("../models/House");

const fetchAllData = async (req, res) => {
  const users = await HouseProperty.find();
  res.status(201).json(users);
};

const createPost = async (req, res) => {
  try {
    const newpost = new HouseProperty(req.body);
    const saved = await newpost.save();

    res.json(saved);
  } catch (err) {
    res.status(400).json(err);
  }
};

const editPost = async (req, res) => {
  const { postid } = req.params;
  try {
    const updatedPost = await HouseProperty.findByIdAndUpdate(
      postid,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { fetchAllData, createPost, editPost };
