const moedaModel = require('../models/users.model');

const findAllValues = async () => {
  const users = await moedaModel.findAllValues();
  return { type: null, message: users };
};

module.exports = {
  findAllValues,
};