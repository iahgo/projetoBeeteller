import Coins from '../components/coins'

function Cotacoes() {
  return (
    <div className="App">
      <section className='dashboard'>
      <section className='coins-container'>
      <Coins pair="USD-BRLT" />
      <Coins pair="BTC-EUR" />
      <Coins pair="BTC-USD" />
      </section>
      </section>
    </div>
  );
}

export default Cotacoes;
