import type { IMovie } from "../types/IMovie";

export const mapApiToMovie = (movie: any): IMovie => {
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
};
