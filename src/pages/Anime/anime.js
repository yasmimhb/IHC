import React, { useEffect,useState } from 'react';
import './anime.css';
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../contexts/FavoritesContext"; // Para acessar os favoritos

import sousou from "../../assets/images/sousou.jpg";
import fma from "../../assets/images/fma.jpg";
import opf1 from "../../assets/images/opf1.jpg";
import sg from "../../assets/images/sg.jpg";
import snk3 from "../../assets/images/snk3.jpg";
import gintama from "../../assets/images/gintama.jpg";
import gintamaFinal from "../../assets/images/gintamaFinal.jpg";
import hxh from "../../assets/images/hxh.jpg";
import clannad from "../../assets/images/clannad.jpg";
import kaguya from "../../assets/images/kaguya.jpg";
import gatsu from "../../assets/images/gatsu.jpg";
import owarimonogatari from "../../assets/images/owarimonogatari.jpg";
import snkFinal from "../../assets/images/snkFinal.jpg";
import cg from "../../assets/images/cg.jpg";
import yourName from "../../assets/images/yourName.jpg";
import ve from "../../assets/images/ve.jpg";
import fate from "../../assets/images/fate.jpg";
import mia from "../../assets/images/mia.jpg";
import ds from "../../assets/images/ds.jpg";
import rezero from "../../assets/images/rezero.jpg";

const AnimeList = () => {
  const { addToFavorites } = useFavorites(); // Para adicionar aos favoritos
  const navigate = useNavigate();
  const [favoritedAnimes, setFavoritedAnimes] = useState([]); // Estado para rastrear os favoritos

  const animes = [
    { 
      rank: 1, title: 'Sousou no Frieren', type: 'TV (28 eps)', date: 'Sep 2023 - Mar 2024', genero: 'Fantasy',
      image: sousou
    },
    { 
      rank: 2, title: 'Fullmetal Alchemist: Brotherhood', type: 'TV (64 eps)', date: 'Apr 2009 - Jul 2010', genero: 'Action, Adventure, Drama',
      image: fma
    },
    { 
      rank: 3, title: 'One Piece Fan Letter', type: 'TV Special (1 ep)', date: 'Oct 2024 - Oct 2024', genero: 'Adventure, Comedy',
      image: opf1
    },
    { 
      rank: 4, title: 'Steins;Gate', type: 'TV (24 eps)', date: 'Apr 2011 - Sep 2011', genero: 'Sci-Fi, Thriller',
      image: sg
    },
    { 
      rank: 5, title: 'Shingeki no Kyojin Season 3 Part 2', type: 'TV (10 eps)', date: 'Apr 2019 - Jul 2019', genero: 'Action, Drama',
      image: snk3
    },
    { 
      rank: 6, title: 'Gintama°', type: 'TV (51 eps)', date: 'Apr 2015 - Mar 2016', genero: 'Action, Comedy, Sci-Fi',
      image: gintama
    },
    { 
      rank: 7, title: 'Gintama: The Final', type: 'Movie (1 ep)', date: 'Jan 2021 - Jan 2021', genero: 'Action, Comedy',
      image: gintamaFinal
    },
    { 
      rank: 8, title: 'Hunter x Hunter (2011)', type: 'TV (148 eps)', date: 'Oct 2011 - Sep 2014', genero: 'Action, Adventure, Fantasy',
      image: hxh
    },
    { 
      rank: 9, title: 'Clannad: After Story', type: 'TV (24 eps)', date: 'Oct 2008 - Mar 2009', genero: 'Drama, Romance',
      image: clannad
    },
    { 
      rank: 10, title: 'Kaguya-sama: Love is War - Ultra Romantic', type: 'TV (13 eps)', date: 'Apr 2022 - Jun 2022', genero: 'Comedy, Romance',
      image: kaguya
    },
    { 
      rank: 11, title: '3-gatsu no Lion 2nd Season', type: 'TV (22 eps)', date: 'Oct 2017 - Mar 2018', genero: 'Drama, Slice of Life',
      image: gatsu
    },
    { 
      rank: 12, title: 'Owarimonogatari 2nd Season', type: 'TV (7 eps)', date: 'Aug 2017 - Aug 2017', genero: 'Mystery, Supernatural',
      image: owarimonogatari
    },
    { 
      rank: 13, title: 'Shingeki no Kyojin: The Final Season Part 2', type: 'TV (1 ep)', date: 'Mar 2023 - Mar 2023', genero: 'Action, Drama, Fantasy',
      image: snkFinal
    },
    { 
      rank: 14, title: 'Code Geass: Lelouch of the Rebellion R2', type: 'TV (25 eps)', date: 'Apr 2008 - Sep 2008', genero: 'Action, Mecha',
      image: cg
    },
    { 
      rank: 15, title: 'Your Name. (Kimi no Na wa)', type: 'Movie (1 ep)', date: 'Aug 2016 - Aug 2016', genero: 'Romance, Supernatural',
      image: yourName
    },
    { 
      rank: 16, title: 'Violet Evergarden', type: 'TV (13 eps)', date: 'Jan 2018 - Apr 2018', genero: 'Drama, Fantasy',
      image: ve
    },
    { 
      rank: 17, title: 'Fate/Stay Night: Heaven’s Feel III. Spring Song', type: 'Movie (1 ep)', date: 'Aug 2020 - Aug 2020', genero: 'Action, Fantasy',
      image: fate
    },
    { 
      rank: 18, title: 'Made in Abyss', type: 'TV (13 eps)', date: 'Jul 2017 - Sep 2017', genero: 'Adventure, Fantasy',
      image: mia
    },
    { 
      rank: 19, title: 'Demon Slayer: Kimetsu no Yaiba', type: 'TV (11 eps)', date: 'Dec 2021 - Feb 2022', genero: 'Action, Supernatural',
      image: ds
    },
    { 
      rank: 20, title: 'Re:Zero kara Hajimeru Isekai Seikatsu', type: 'TV (13 eps)', date: 'Jul 2020 - Sep 2020', genero: 'Fantasy, Psychological',
      image: rezero
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFavorite = (anime) => {
    addToFavorites(anime);
    setFavoritedAnimes((prev) => [...prev, anime.rank]); // Atualiza os favoritos pelo rank
  };

  const isFavorited = (rank) => favoritedAnimes.includes(rank); // Verifica se o anime já foi favoritado

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="anime-list-container">
      <div className="header">
        <h1>Lista de Animes</h1>
        <div className="header-buttons">
          <button className="favorites-button" onClick={() => navigate("/favoritos")}>
            Favoritos
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>

      <div className="anime-list">
        {animes.map((anime) => (
          <div className="anime-item" key={anime.rank}>
            <div className="anime-details">
              <img className="anime-cover" src={anime.image} alt={anime.title} />
              <div className="anime-info">
                <h2>{anime.title}</h2>
                <p>{anime.type}</p>
                <p>
                  {anime.date} • {anime.genero}
                </p>
              </div>
            </div>
            <button
              className={`favoritar-btn ${isFavorited(anime.rank) ? "favorited" : ""}`}
              onClick={() => handleFavorite(anime)}
            >
              {isFavorited(anime.rank) ? "Favoritado" : "Favoritar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;