import { useEffect, useState } from "react";

import { fetchTrendingMovies } from "../api/apiServer";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <>
      <ErrorMessage />
      <Loader loading={loading} />
      <MovieList movies={trendingMovies} />
    </>
  );
}
