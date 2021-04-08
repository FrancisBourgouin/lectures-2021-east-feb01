const express = require('express');
const users = express.Router();

users.get('/:user_id', (req, res) => {
  res.send('ok')
})
users.post('/login', (req, res) => {
  res.cookie('user', 'francis')
  res.json({ name: "Francis", email: "Secret@secret.com" })
})
users.post('/register', (req, res) => {
  res.send('ok')
})
users.post('/authenticate', (req, res) => {
  if (req.cookies.user === "francis") {
    res.json({ name: "Francis", email: "Secret@secret.com" })
  }
  res.json(null)
})

module.exports = users;
