const IMAGE_URL = import.meta.env.VITE_IMG;

// Types
import type { ISimpleMovie } from "../types/ISimpleMovie";

// Components
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

type Props = {
  movie: ISimpleMovie;
  showLink?: boolean;
};

const MovieCard = ({ movie, showLink = true }: Props) => {
  return (
    <div className="movie-card">
      <img src={`${IMAGE_URL + movie.posterPath}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.voteAverage.toPrecision(2)}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
