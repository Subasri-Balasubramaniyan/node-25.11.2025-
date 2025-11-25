const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getUsers);  /* call getUsers function from userController.js */
router.post("/users", userController.createUser); /* call createUsers function from userController.js */

module.exports = router;
