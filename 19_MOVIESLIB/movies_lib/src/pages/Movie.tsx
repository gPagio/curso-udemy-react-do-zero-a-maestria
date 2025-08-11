// CSS
import "./Movie.css";

// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import MovieCard from "../components/MovieCard";

// Types
import type { IDetailedMovie } from "../types/IDetailedMovie";

// Services
import movieService from "../services/movieService";

// Mapper
import { mapDetailedMovieToSimpleMovie } from "../mappers/movieMapper";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IDetailedMovie | null>(null);

  useEffect(() => {
    movieService.getMovieById(id).then(setMovie);
  }, []);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard
            movie={mapDetailedMovieToSimpleMovie(movie)}
            showLink={false}
          ></MovieCard>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
