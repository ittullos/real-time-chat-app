const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Mock user data
const users = [];

// Register route
router.post("/register", async (req, res) => {
  console.log("Registering user:", req.body);
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).send("User registered");
  } catch (error) {
    res.status(400).send("Error registering user: " + error.message);
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send("Error logging in: " + error.message);
  }
});

module.exports = router;
