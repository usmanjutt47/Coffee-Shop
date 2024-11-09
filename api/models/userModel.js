const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password should be at least 8 characters long"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  // Password hashing
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
