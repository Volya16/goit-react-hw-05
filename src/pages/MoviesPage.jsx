import { useEffect, useState } from "react";

import SearchInput from "../components/SearchInput/SearchInput";
import { fetchMoviesByQuery } from "../api/apiServer";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;
    async function getMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [searchParams]);

  const handlerSearch = (query) => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchInput onSearch={handlerSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
