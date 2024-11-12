const Product = require("../models/productModel");

const createAddToCart = async (req, res) => {
  try {
    const { name, description, price, userId } = req.body;

    if (!name || !description || !price || !userId) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const numericPrice = Number(price);
    if (isNaN(numericPrice)) {
      return res.status(400).json({ message: "Price must be a valid number." });
    }

    // Pehle check karo ki ye product pehle se user ke cart mein hai ya nahi
    const existingProduct = await Product.findOne({
      userId,
      name,
      isCart: true,
    });

    if (existingProduct) {
      return res.status(200).json({
        message: "Product is already in cart",
        isCart: true,
      });
    }

    // Agar pehle se nahi hai to naye product ko cart mein add karo
    const baseURL = "http://localhost:5000";
    const imagePath = req.file ? req.file.path : null;
    const imageURL = imagePath ? `${baseURL}/${imagePath}` : null;

    const newProduct = new Product({
      name,
      description,
      price: numericPrice,
      userId,
      image: imageURL,
      isCart: true,
    });
    await newProduct.save();

    res.status(201).json({
      message: "Product added to cart successfully",
      isCart: true,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const getAddToCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const products = await Product.find({ userId });

    res.status(200).json({
      message: "Products retrieved successfully",
      products,
    });
  } catch (error) {
    console.error("Error retrieving products:", error.message);

    res.status(500).json({
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

module.exports = {
  createAddToCart,
  getAddToCart,
};
