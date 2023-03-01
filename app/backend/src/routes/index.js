const express = require('express');
const loginRoutes = require('./login.routes');
const coinsRoutes = require('./coins.routes');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/coins', coinsRoutes);

module.exports = routes;