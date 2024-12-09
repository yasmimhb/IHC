import React from "react";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useNavigate, useLocation } from "react-router-dom"; // Importa o hook useNavigate e useLocation
import "./favoritos.css";
import { Link } from 'react-router-dom';  // Adicione esta linha


const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();
  const location = useLocation(); // Obtemos a localização atual da página

  const handleGoBack = () => {
    navigate("/anime"); // Substitua '/anime' pela rota correta
  };

  // Verifica se a página atual é a de "Animes"
  const isAnimePage = location.pathname === "/anime";

  return (
    
    <div className="anime-list-container">
      <div className="header">
      <p>
        <Link to="/anime">Animes</Link>
        </p>
        <h1>Favoritos</h1>
        <div className="header-buttons">

        </div>
      </div>

      {favorites.length === 0 ? (
        <p>Nenhum anime adicionado aos favoritos.</p>
      ) : (
        favorites.map((anime) => (
          <div key={anime.rank} className="anime-item">
            <h2>{anime.title}</h2>
            <button 
             className="remove-favorite-btn"
            onClick={() => removeFromFavorites(anime.rank)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
