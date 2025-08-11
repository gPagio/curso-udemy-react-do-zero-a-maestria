// API
import movieApi from "../api/movieApi";

// Mappers
import { mapApiToSimpleMovie, mapApiToDetailedMovie } from "../mappers/movieMapper";

// Types
import type { ISimpleMovie } from "../types/ISimpleMovie";
import type { IDetailedMovie } from "../types/IDetailedMovie";

const getTopRatedMovies = async (): Promise<ISimpleMovie[]> => {
  const raw = await movieApi.getTopRatedMovies();
  return raw.map(mapApiToSimpleMovie);
};

const getMoviesByQuery = async (query: string | null): Promise<ISimpleMovie[]> => {
  const raw = await movieApi.getMoviesByQuery(query);
  if (raw) return raw.map(mapApiToSimpleMovie);
  return [];
};

const getMovieById = async (id: string | undefined): Promise<IDetailedMovie | null> => {
  const raw = await movieApi.getMovieById(id);

  if (!raw) return null;
  return mapApiToDetailedMovie(raw);
};

const movieService = { getTopRatedMovies, getMoviesByQuery, getMovieById };

export default movieService;
