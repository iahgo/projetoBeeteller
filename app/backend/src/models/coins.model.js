const axios = require('axios');

const findAllValues = async(coin) => {
  const apiUrl = `https://economia.awesomeapi.com.br/json/last/${coin}`;
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar dados da API');
  }
}

module.exports = {
  findAllValues,
}