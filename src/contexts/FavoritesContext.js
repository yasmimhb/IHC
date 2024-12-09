import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (anime) => {
    setFavorites((prev) => {
      if (prev.find((item) => item.rank === anime.rank)) {
        return prev; 
      }
      return [...prev, anime];
    });
  };

  const removeFromFavorites = (rank) => {
    setFavorites((prev) => prev.filter((anime) => anime.rank !== rank));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
