const MOVIES_URL: string = import.meta.env.VITE_API;
const API_KEY: string = import.meta.env.VITE_API_KEY;
const SEARCH_URL: string = import.meta.env.VITE_SEARCH;

const getTopRatedMovies = async () => {
  const url = `${MOVIES_URL}top_rated?${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.results;
};

const getMoviesByQuery = async (query: string | null) => {
  if (!query) return null;

  const url = `${SEARCH_URL}?${API_KEY}&query=${query}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.results;
};

const getMovieById = async (id: string | undefined) => {
  if (!id) return null;

  const url = `${MOVIES_URL}${id}?${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const movieApi = {
  getTopRatedMovies,
  getMoviesByQuery,
  getMovieById,
};

export default movieApi;
