const express = require("express");
const router = express.Router();
const postMethods = require("../controllers/postController.js");
const { TokenAuthenticator } = require("../middlewares/UserAuthentication.js");

// To access All the POSTS ✔️
router.get("/all", TokenAuthenticator, postMethods.fetchAllData);

// To create a new POST ✔️
router.post("/new", TokenAuthenticator, postMethods.createPost);

// To Edit the Post   ✔️
router.put("/:postid", TokenAuthenticator, postMethods.editPost);

module.exports = router ;
