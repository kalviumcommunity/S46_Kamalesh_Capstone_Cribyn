const express = require("express");
const router = express.Router();
const userMethods = require("../controllers/userController.js");
const { TokenAuthenticator } = require("../middlewares/UserAuthentication.js");

router.get("/all", TokenAuthenticator, userMethods.getAllUsers);

router.post("/new", userMethods.registerNewUser);

router.post("/login", userMethods.loginUser);

router.put("/:userid", TokenAuthenticator, userMethods.updateUser);

module.exports = router;
