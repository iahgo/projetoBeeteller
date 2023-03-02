import Coins from '../components/coins'
import Header from '../components/header';
import Table from '../components/table'

function Cotacoes() {
    return (
    <div className="App">
      <Header />
      <section className='dashboard'>
        <section className='coins-container'>
          <Coins pair="USD-BRLT" imagem="0"/>
          <Coins pair="BTC-EUR" imagem="1"/>
          <Coins pair="BTC-USD" imagem="1"/>
        </section>
      </section>
          <Table />
    </div>
  );
}

export default Cotacoes;
