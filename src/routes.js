import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Anime from './pages/Anime/anime';
import Cadastrar from './pages/Cadastrar/cadastrar';
import Favoritos from './pages/Favoritos/favoritos';
import Inicio from "./pages/Inicio/inicio"; 
import Login from './pages/Login/login';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/cadastrar" element={ <Cadastrar/> } />
        <Route path="/anime" element={ <Anime/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;