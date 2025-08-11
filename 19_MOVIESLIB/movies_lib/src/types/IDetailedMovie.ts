export interface IDetailedMovie {
  adult: boolean;
  backdropPath: string;
  belongsToCollection?: {
    id: number;
    name: string;
    posterPath: string | null;
    backdropPath: string | null;
  };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  id: number;
  imdbId: string | null;
  originCountry: string[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string | null;
  productionCompanies: {
    id: number;
    logoPath: string | null;
    name: string;
    originCountry: string;
  }[];
  productionCountries: {
    iso31661: string;
    name: string;
  }[];
  releaseDate: string;
  revenue: number;
  runtime: number | null;
  spokenLanguages: {
    englishName: string;
    iso6391: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
