const express = require('express');
const coinsController = require('../controllers/coins.controller');

const route = express.Router();

route.get('/:coin', coinsController.findAllValues);
route.get('/:coin/:days', coinsController.findAllValuesByDays);

module.exports = route;