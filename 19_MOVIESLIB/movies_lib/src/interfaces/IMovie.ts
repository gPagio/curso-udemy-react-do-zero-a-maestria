export interface IMovie {
  id: number;
  title: string;
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
