const MOVIES_URL: string = import.meta.env.VITE_API;
const API_KEY: string = import.meta.env.VITE_API_KEY;

// Hooks
import { useState, useEffect } from "react";

// Types
import type { IMovie } from "../interfaces/IMovie";

const Home = () => {
  const [topMovies, setTopMovies] = useState<IMovie[]>([]);

  const getTopRatedMovies = async () => {
    const url = `${MOVIES_URL}top_rated?${API_KEY}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();

    const movies: IMovie[] = data.results.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title,
        adult: movie.adult,
        backdropPath: movie.backdrop_path,
        genreIds: movie.genre_ids,
        originalLanguage: movie.original_language,
        originalTitle: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        video: movie.video,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
      } as IMovie;
    });

    setTopMovies(movies);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 && topMovies.map((movie) => <p>{movie.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
