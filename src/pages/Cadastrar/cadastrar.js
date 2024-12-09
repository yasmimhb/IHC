import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';  // Adicione esta linha
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";  // Importe o auth do seu firebaseConfig
import "./cadastrar.css";

function Cadastrar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleCadastrar = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (email && password) {
      try {
        // Criando usuário no Firebase
        await createUserWithEmailAndPassword(auth, email, password);

        // Após o cadastro bem-sucedido, redireciona para a página de animes
        navigate("/anime");
      } catch (error) {
        alert("Erro ao cadastrar: " + error.message);
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Cadastrar</h2>
        <form onSubmit={handleCadastrar}>
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
          <div className="input-group">
            <label htmlFor="confirm-password">
              <span className="icon">🔒</span>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirmar Senha"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="login-button">Cadastrar</button>
        </form>
        <p>
          Já possui conta? <Link to="/login">Entre aqui</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastrar;
