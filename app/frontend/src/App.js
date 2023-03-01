import Login from './pages/login'
// import Cotacoes from './pages/cotações'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cotacoes from './pages/cotações';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cotacoes" element={<Cotacoes />} />
      </Routes>
    {/* <div className="App"> */}
      {/* <Login /> */}
      {/* <Cotacoes /> */}
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
