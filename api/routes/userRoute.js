const express = require("express");
const {
  createUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const {
  createAddToCart,
  getAddToCart,
} = require("../controllers/productsController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/users", getUser);
router.post("/add-to-cart", upload.single("image"), createAddToCart);
router.get("/products/:userId", getAddToCart);

module.exports = router;
