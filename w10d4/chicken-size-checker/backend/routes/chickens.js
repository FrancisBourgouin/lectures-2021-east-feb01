const express = require('express');
const chickens = express.Router();

const listOfChicken = ["Pock Pock", "Pollo", "Poulet", "Chicken"]
chickens.get('/', (req, res) => {
  res.json(listOfChicken)
})
chickens.get('/:chicken_id', (req, res) => {
  res.send('ok')
})
chickens.put('/:chicken_id', (req, res) => {
  res.send('ok')
})
chickens.post('/', (req, res) => {
  res.send('ok')
})

module.exports = chickens;
