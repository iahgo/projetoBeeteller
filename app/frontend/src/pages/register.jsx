import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/register.css'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/login/new", {
        email,
        password,
      });
      console.log(response);

      setRedirectToHome(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (redirectToHome) {
    return <Link to="/" />;
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirmação de senha:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
