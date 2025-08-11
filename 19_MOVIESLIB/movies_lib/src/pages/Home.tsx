// CSS
import "./MoviesGrid.css"

// Hooks
import { useState, useEffect } from "react";

// Types
import type { IMovie } from "../types/ISimpleMovie";

// Services
import movieService from "../services/movieService";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [topMovies, setTopMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    movieService.getTopRatedMovies().then(setTopMovies);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Nenhum filme encontrado.</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
