const coinsModel = require('../models/coins.model');

const findAllValues = async (coin) => {
  const values = await coinsModel.findAllValues(coin);
  console.log('values');
  console.log(values);
  const { USDBRL: { varBid, ask, create_date, ...valores } } = values;
  console.log('valores');
  console.log(valores);
  return { type: null, message: valores };
};

module.exports = {
  findAllValues,
};