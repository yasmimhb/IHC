import React from "react";
import AppRoutes from "./routes"; // Certifique-se de que AppRoutes está importado corretamente
import { FavoritesProvider } from "./contexts/FavoritesContext"; // Importe o FavoritesProvider

function App() {
  return (
    <FavoritesProvider>  {/* Envolva a árvore de rotas com o FavoritesProvider */}
      <AppRoutes />
    </FavoritesProvider>
  );
}

export default App;
