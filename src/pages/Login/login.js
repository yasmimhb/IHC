import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';  // Adicione esta linha
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Caminho corrigido
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);

        navigate("/anime");
      } catch (error) {
        alert("Erro ao fazer login: " + error.message);
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Entrar</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">
              <span className="icon">📧</span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <span className="icon">🔒</span>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>
          Não possui conta? <Link to="/cadastrar">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
