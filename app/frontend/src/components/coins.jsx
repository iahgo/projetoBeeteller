import React, { useState, useEffect } from 'react';
import axios from 'axios';
import symbol1 from '../icons/symbol1.svg';
import symbol2 from '../icons/symbol2.svg';
import '../styles/coins.css'

function Coins({ pair, imagem}) {
  const [coinsData, setCoinsData] = useState(null);
  const escolha = [symbol1, symbol2]

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
      <div className='dashboard'> 
        <div className='coin'>
          <div className='frame4'>
            <div className='frame2'>
              <div className="t-coin">{coinsData.code} / {coinsData.codein}</div>
              <div className='frame1'>
                <div className="t-rs">R$</div>
                <div className="t-valor">{ajuste(coinsData.bid, 2)}</div>
              </div>
              <div className="t-rs">{coinsData.name}</div>
            </div>
              <div className='bold'>
                <div className='dolar-sign'><img  src={escolha[Number(imagem)]} alt='moeda'></img></div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default Coins;
