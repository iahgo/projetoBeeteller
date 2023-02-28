const express = require('express');
const userController = require('../controllers/users.controller');

const route = express.Router();

route.get('/', userController.findAllUsers);

module.exports = route;