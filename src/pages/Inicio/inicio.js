import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação
import Button from "../../components/Button/Button";
import semTTulo from "../../assets/images/image1.png";
import "./inicio.css";

const Desktop = ({ className = "" }) => {
  const navigate = useNavigate(); // Hook para redirecionar páginas

  const handleButtonClick = () => {
    navigate("/login"); // Redireciona para a rota desejada
  };

  return (
    <div className={`desktop ${className}`}>
      <div className="overlap-group">
        <img className="sem-t-tulo" alt="Imagem de fundo" src={semTTulo} />
        <div className="rectangle" />
        <Button
          className="button-instance"
          labelText="ENTRAR"
          labelTextClassName="design-component-instance-node"
          showIcon={false}
          type="filled"
          onClick={handleButtonClick} 
        />
        <h1 className="text-wrapper">Anime List</h1>
        <p className="div">Seu catálogo pessoal de animes</p>
      </div>
    </div>
  );
};

export default Desktop;
