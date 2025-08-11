const MOVIES_URL: string = import.meta.env.VITE_API;
const API_KEY: string = import.meta.env.VITE_API_KEY;

const getTopRatedMovies = async () => {
  const url = `${MOVIES_URL}top_rated?${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.results;
};

const movieApi = {
  getTopRatedMovies,
};

export default movieApi;
