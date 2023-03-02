import React, { useState, useEffect } from "react";
import down from '../icons/down.svg'
import symbol1 from '../icons/symbol1.svg'
import '../styles/table.css'

const Table = () => {
  const [data, setData] = useState(null); 
  const [currency, setCurrency] = useState('USD-BRL');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/coins/${currency}/5`);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [currency]);

  const extractSecondCurrency = (name) => {
    return name.split("/").pop(); // Extrai a segunda moeda da string
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  }
  return (
    <section className="section_list">
      <div className="head_section">
        <div className="t_cotacoes">Cotações</div>
        <div className="btn_coin">
            <select id="currency" value={currency} onChange={handleCurrencyChange}>
            <option value="USD-BRL"> Dólar Americano / Real </option>
            <option value="BTC-EUR"> Euro / Bitcoin </option>
            <option value="BTC-USD"> Dólar Americano / Bitcoin </option>
          </select>
        </div>
      </div>



        {data ? (
          <div className="table_list"> 


            <table>
              <thead >

                <tr className="head_list">
                  <th className="t_moedas">Moeda</th>
                    <div className="frame28">
                      <div className="minima">
                        <th className="t_minima">Mínima</th>
                        <div className="chevron_down">
                          <div className="vector"><img src={down} alt="down" /></div>
                        </div>
                      </div>
                      <div className="maxima">
                        <th className="t_maxima">Maxima</th>
                        <div className="chevron_down">
                          <div className="vector"><img src={down} alt="down" /></div>
                        </div>
                      </div>
                    </div>

                    <div className="variacao">
                      <th className="t_variacao">Variação</th>
                      <div className="chevron_down">
                          <div className="vector"><img src={down} alt="down" /></div>
                      </div>
                    </div>
                  {/* <th>dia</th> */}
                </tr>
              </thead>

              <tbody className="results">


                {data.map((item) => (
                  <>
                  <tr className="frame14" key={item.dia}>
                  <div className="frame9">
                  <div className='bold'>
                    <div className='dolar-sign'><img  src={symbol1} alt='dolar'></img></div>
                  </div>
                    <div className="frame8">
                      <td className="t_name8">{extractSecondCurrency(item.nome)}</td>
                      <td className="t_data">{item.dia}</td>
                    </div>
                  </div>

                  <div className="frame11">
                      <td className="t_min">{item.minimo}</td>
                      <td className="t_max">{item.maximo}</td>
                  </div>

                  <div className={`${item.variacao < 0 ? 'frame10b' : 'frame10'}`}>
                  <td>{item.variacao}%</td>
                  </div>
                  </tr>
                  </>
                ))}


              </tbody>





          </table>


          </div>
        ) : (
          <p>Carregando dados da API...</p>
        )}
        

    </section>
  );
};

export default Table;
