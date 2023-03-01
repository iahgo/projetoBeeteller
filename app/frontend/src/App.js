import Login from './pages/login'
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
    </BrowserRouter>
  );
}

export default App;
