const express = require("express");
const {
  createUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/users", getUser);

module.exports = router;
