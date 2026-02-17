const express = require("express");
const router = express.Router();
const propertyMethods = require("../controllers/propertyController.js");
const { TokenAuthenticator } = require("../middlewares/UserAuthentication.js");

// To access All the POSTS ✔️
router.get("/all", TokenAuthenticator, propertyMethods.fetchAllProperties);

// To create a new POST ✔️
router.post("/new", TokenAuthenticator, propertyMethods.createProperty);

// To Edit the Post   ✔️
router.put("/:propertyid", TokenAuthenticator, propertyMethods.editProperty);

module.exports = router ;
