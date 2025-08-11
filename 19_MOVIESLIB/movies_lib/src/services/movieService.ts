import movieApi from "../api/movieApi";
import { mapApiToMovie } from "../mappers/movieMapper";
import type { IMovie } from "../types/IMovie";

const getTopRatedMovies = async (): Promise<IMovie[]> => {
  const raw = await movieApi.getTopRatedMovies();
  return raw.map(mapApiToMovie);
};

const movieService = { getTopRatedMovies };

export default movieService;
