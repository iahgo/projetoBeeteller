const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 50, // limit each IP to 50 requests per windowMs
  message: 'Too many accounts created from this IP, please try again after a minute',
});

// API SECURITY
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json());

module.exports = app;
