import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/coins.css'

function Coins({ pair }) {
  const [coinsData, setCoinsData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/coins/${pair}`)
      .then(response => setCoinsData(response.data))
      .catch(error => console.error(error));
  }, [pair]);

  if (!coinsData) {
    return <div>Carregando...</div>;
  }

  function ajuste(nr, casas) {
    const sign = Math.sign(nr);
    if (sign === -1)
        nr *= -1;
    const og = Math.pow(10, casas);
    return Math.floor(nr * og) / og * sign;
  }

  return (
    <div className='coin-div'>
      {/* <div className="coins-container"> */}
        <div className="coin-code">{coinsData.code} / {coinsData.codein}</div>
        <div className="coin-bid">{ajuste((coinsData.bid), 2)}</div>
        <div className="coin-name">{coinsData.name}</div>
      {/* </div> */}
    </div>
  );
}

export default Coins;
