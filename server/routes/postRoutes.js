const express = require("express");
const router = express.Router();
const postMethods = require("../controllers/postController.js");

// To access All the POSTS ✔️
router.get("/all", postMethods.fetchAllData);

// To create a new POST ✔️
router.post("/new", postMethods.createPost);

// To Edit the Post   ✔️
router.put("/:postid", postMethods.editPost);

module.exports = router ;
