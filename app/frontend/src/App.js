import Login from './pages/login'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cotacoes from './pages/cotações';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cotacoes" element={<Cotacoes />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
