const express = require('express');
const userController = require('../controllers/users.controller');
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middlewares/login.middleware');

const route = express.Router();

route.get('/', userController.findAllUsers);
route.post('/', loginMiddleware, loginController.login);

module.exports = route;