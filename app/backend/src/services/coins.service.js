const coinsModel = require('../models/coins.model');

const findAllValues = async (coin) => {
  const values = await coinsModel.findAllValues(coin);
  const [_coinName, coinValues] = Object.entries(values)[0];
  // { USDBRL: {code: 'USD',codein: 'BRL',low: '5.2369', etc } }
  const { varBid, ask, create_date, ...valores } = coinValues;  

  return { type: null, message: valores };
};

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return formattedDate;
};

const findAllValuesByDays = async (coin, days) => {
  const values = await coinsModel.findAllValuesByDays(coin, days);
  const groupedData = values.reduce((acc, data) => {
    const day = formatTimestamp(data.timestamp);
    if (!acc[day]) {
      acc[day] = { 
        nome: values[0].name, 
        dia: day, 
        minimo: data.low, 
        maximo: data.high, 
        variacao: data.pctChange, 
      };
    }
    return acc;
  }, {});
  // console.log(Object.values(groupedData));

  return { type: null, message: Object.values(groupedData) };
};

module.exports = {
  findAllValues,
  findAllValuesByDays,
};