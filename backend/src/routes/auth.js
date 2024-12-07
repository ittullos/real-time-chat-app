const express = require('express');
const router = express.Router();

// Mock user data
const users = [];

// Register route
router.post('/register', (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };
  users.push(user);
  res.status(201).send('User registered');
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;