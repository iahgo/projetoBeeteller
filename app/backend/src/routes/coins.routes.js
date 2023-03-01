const express = require('express');
const coinsController = require('../controllers/coins.controller');

const route = express.Router();

route.get('/:coin', coinsController.findAllValues);

module.exports = route;