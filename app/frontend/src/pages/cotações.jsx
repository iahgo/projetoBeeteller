import Coins from '../components/coins'
import Header from '../components/header';
import Table from '../components/table'

function Cotacoes() {
    return (
    <div className="App">
      <Header />
      <section className='dashboard'>
        <section className='coins-container'>
          <Coins pair="USD-BRLT" />
          <Coins pair="BTC-EUR" />
          <Coins pair="BTC-USD" />
          <Table />
        </section>
      </section>
    </div>
  );
}

export default Cotacoes;
