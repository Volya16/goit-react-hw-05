import axios from "axios";

const API = {
  token:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTZkMTQ0NjUwMDNlZDkwYTQxNWZjMTFiMDc4ODk3YyIsIm5iZiI6MTc0MzYyMDUzMC45MjIsInN1YiI6IjY3ZWQ4OWIyODM2YzhlZGE3Y2FiMDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eX5twDEVcbdZLLNQZk1JVAd44jxFpuSPQiKyHFHneYo",
  key: "3a6d14465003ed90a415fc11b078897c",
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API.token}`,
  },
  params: {
    language: "uk-UA",
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await api.get("/trending/movie/day", {
    params: { page: 1 },
  });
  return data.results;
};
