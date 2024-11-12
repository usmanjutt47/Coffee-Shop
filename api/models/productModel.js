const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  isCart: { type: Boolean, default: false },
});

module.exports = mongoose.model("Product", productSchema);
