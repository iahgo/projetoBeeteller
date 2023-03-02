import Coins from '../components/coins'
import Header from '../components/header';
import Table from '../components/table'

function Cotacoes() {
    return (
    <div className="App">
      <Header />

      <section className='moedas'>
        <div className="tituloMoedas">Moedas</div>
        <section className='coins-container'>
        {/* <section className='containerCardsMoedas'> */}
          {/* <div className="cardsMoedas"> */}
            <Coins pair="USD-BRL" imagem="0"/>
            <Coins pair="BTC-EUR" imagem="1"/>
            <Coins pair="BTC-USD" imagem="1"/>
          {/* </div> */}
        </section>
      </section>

        <div className="table-container">
          <Table />
        </div>

    </div>
  );
}

export default Cotacoes;
