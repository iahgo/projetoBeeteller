const coinsService = require('../services/coins.service');

const findAllValues = async (req, res) => {
  const { coin } = req.params;
  console.log(coin);
  const { message } = await coinsService.findAllValues(coin);
  return res.status(200).json(message);
};
const findAllValuesByDays = async (req, res) => {
  const { coin, days } = req.params;
  console.log(coin);
  console.log(days);
  const { message } = await coinsService.findAllValuesByDays(coin, days);
  return res.status(200).json(message);
};

module.exports = {
  findAllValues,
  findAllValuesByDays,
};