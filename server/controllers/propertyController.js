const { Property } = require("../models/Property");

const fetchAllProperties = async (req, res) => {
  const users = await Property.find();
  res.status(201).json(users);
};

const createProperty = async (req, res) => {
  try {
    const newpost = new Property(req.body);
    const saved = await newpost.save();

    res.json(saved);
  } catch (err) {
    res.status(400).json(err);
  }
};

const editProperty = async (req, res) => {
  const { postid } = req.params;
  try {
    const updatedPost = await Property.findByIdAndUpdate(
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

module.exports = { fetchAllProperties, createProperty, editProperty };
