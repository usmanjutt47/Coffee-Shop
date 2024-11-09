const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }

    const user = new User({
      email,
      password,
    });

    await user.save();

    res.status(201).send({ message: "User created successfully", user });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorMessages = [];
      for (let field in error.errors) {
        errorMessages.push(error.errors[field].message);
      }
      return res.status(400).send({ message: errorMessages.join(", ") });
    }

    res
      .status(500)
      .send({ message: "Error creating user", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please enter both email and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    res.status(200).send({ message: "Login successful", userId: user._id });
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send("Error fetching users: " + err.message);
  }
};

module.exports = { createUser, loginUser, getUser };
