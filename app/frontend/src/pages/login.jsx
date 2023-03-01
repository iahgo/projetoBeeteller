import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import activity from '../icons/activity.svg';
import logobeeteller from '../icons/logobeeteller.svg';
import Login from '../icons/login.svg';
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [token, setToken] = useState(""); // novo estado para armazenar o token

  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    if (password.length < 6) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    axios.post('http://localhost:3001/login', { email, password })
      .then(response => {
        console.log(response.data);
        setToken(response.data.token); // armazena o token no estado
      })
      .catch(error => {
        console.error(error);
        alert('Usuário não cadastrado. Acesse o campo esqueceu a senha para criar um novo usuário.');

      });
  }

  // redireciona para a página de cotações se o token existir
  if (token) {
    return <Navigate to="/cotacoes" />;
  }

  return (
    <div className="nav-top">
      <div className='nav-infos'>
        <div className='logos'>
          <nav className='logo-beeteller'>
            <nav className='logo-beeteller'><img src={logobeeteller} alt='logo'></img></nav>
          </nav>
          <nav className='divider'></nav>
          <nav className='cotacoes'>
            <nav className='t-cotacoes'>cotações</nav>
            <nav className='activity'>
              <nav className='v-activity'><img src={activity} alt='activity'></img></nav>
            </nav>
          </nav>
        </div>
        <div className='idioma'>EN</div>
      </div>
      <div className='imagem' ><img src={Login} alt='activity'></img></div>
      <section className='section-login'>
        <div className='head'>
          <div className='title'>
            <div className='t1'>Olá! Bem vindo de volta</div>
            <div className='t2'>Faça login com seus dados inseridos durante o registro</div>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <div className='inputs'>
              <div className='e-mail'>
                <div className='t-e-mail'>E-mail</div>
                <input className='frame30' type="text" id="username" name="e-mail" placeholder="Exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <div className="error">Email inválido</div>}
              </div>
              <div className='password'>
                <div className='frame33'>
                <div className='t-senha'>Senha</div>
                <Link to="/register" className='t-esqueceu-a-senha'>Esqueceu a senha</Link>
                </div>
                  <input className='frame30' type="password" id="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <div className="error">Senha inválida</div>}
                </div>
              </div>
            <button className='btn-login' type="submit">Entrar</button>
          </form>
        </div>
      </section>
    </div>
);
}

export default LoginPage;