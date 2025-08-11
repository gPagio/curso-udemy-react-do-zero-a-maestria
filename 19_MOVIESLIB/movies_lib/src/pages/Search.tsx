// CSS
import "./MoviesGrid.css";

// Hooks
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import MovieCard from "../components/MovieCard";

// Types
import type { ISimpleMovie } from "../types/ISimpleMovie";

// Services
import movieService from "../services/movieService";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [searchMovies, setSearchMovies] = useState<ISimpleMovie[]>([]);

  useEffect(() => {
    movieService.getMoviesByQuery(query).then(setSearchMovies);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {searchMovies.length === 0 && <p>Nenhum filme encontrado.</p>}
        {searchMovies.length > 0 &&
          searchMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Search;
