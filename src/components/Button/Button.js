// src/components/Button.js
import React from "react";
import "./Button.css"; // Arquivo de estilos do botão (criaremos em breve)

const Button = ({ labelText, className = "", labelTextClassName = "", showIcon = false, type = "filled", onClick }) => {
  return (
    <button
      className={`button ${type} ${className}`}
      onClick={onClick}
    >
      {showIcon && <span className="icon" />} {/* Ícone opcional */}
      <span className={labelTextClassName}>{labelText}</span>
    </button>
  );
};

export default Button;
