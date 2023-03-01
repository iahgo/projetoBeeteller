const coinsModel = require('../models/coins.model');

const findAllValues = async (coin) => {
  const values = await coinsModel.findAllValues(coin);
  const [_coinName, coinValues] = Object.entries(values)[0];
  // { USDBRL: {code: 'USD',codein: 'BRL',low: '5.2369', etc } }
  const { varBid, ask, create_date, ...valores } = coinValues;  

  return { type: null, message: valores };
};

module.exports = {
  findAllValues,
};