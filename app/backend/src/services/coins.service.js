const coinsModel = require('../models/coins.model');

const findAllValues = async (coin) => {
  const values = await coinsModel.findAllValues(coin);
  console.log(values);
  return { type: null, message: values };
};

module.exports = {
  findAllValues,
};