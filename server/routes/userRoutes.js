const express = require("express");
const router = express.Router();
const userMethods = require("../controllers/userController.js");

router.get("/all", userMethods.getAllUsers);

router.post("/new", userMethods.registerNewUser);

router.post("/login", userMethods.loginUser);

router.put("/:userid", userMethods.updateUser);

module.exports = router;
