import type { ISimpleMovie } from "../types/ISimpleMovie";
import type { IDetailedMovie } from "../types/IDetailedMovie";

export const mapApiToSimpleMovie = (movie: any): ISimpleMovie => {
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
  } as ISimpleMovie;
};

export const mapApiToDetailedMovie = (movie: any) => {
  return {
    adult: movie.adult,
    backdropPath: movie.backdrop_path,
    belongsToCollection: movie.belongs_to_collection
      ? {
          id: movie.belongs_to_collection.id,
          name: movie.belongs_to_collection.name,
          posterPath: movie.belongs_to_collection.poster_path,
          backdropPath: movie.belongs_to_collection.backdrop_path,
        }
      : undefined,
    budget: movie.budget,
    genres: movie.genres,
    homepage: movie.homepage,
    id: movie.id,
    imdbId: movie.imdb_id,
    originCountry: movie.origin_country,
    originalLanguage: movie.original_language,
    originalTitle: movie.original_title,
    overview: movie.overview,
    popularity: movie.popularity,
    posterPath: movie.poster_path,
    productionCompanies: movie.production_companies?.map((c: any) => ({
      id: c.id,
      logoPath: c.logo_path,
      name: c.name,
      originCountry: c.origin_country,
    })),
    productionCountries: movie.production_countries?.map((c: any) => ({
      iso31661: c.iso_3166_1,
      name: c.name,
    })),
    releaseDate: movie.release_date,
    revenue: movie.revenue,
    runtime: movie.runtime,
    spokenLanguages: movie.spoken_languages?.map((l: any) => ({
      englishName: l.english_name,
      iso6391: l.iso_639_1,
      name: l.name,
    })),
    status: movie.status,
    tagline: movie.tagline,
    title: movie.title,
    video: movie.video,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
  } as IDetailedMovie;
};

export const mapDetailedMovieToSimpleMovie = (detail: IDetailedMovie): ISimpleMovie => {
  return {
    id: detail.id,
    title: detail.title,
    adult: detail.adult,
    backdropPath: detail.backdropPath,
    genreIds: detail.genres?.map((g: any) => g.id) || [],
    originalLanguage: detail.originalLanguage,
    originalTitle: detail.originalTitle,
    overview: detail.overview,
    popularity: detail.popularity,
    posterPath: detail.posterPath ? detail.posterPath : "",
    releaseDate: detail.releaseDate,
    video: detail.video,
    voteAverage: detail.voteAverage,
    voteCount: detail.voteCount,
  };
};
