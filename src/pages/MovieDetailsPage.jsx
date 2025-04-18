import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesById } from "../api/apiServer";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const goBackLink = useRef(location.state);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);
  return (
    <>
      <h1>Movie Details</h1>
      <Link to={goBackLink.current || "/"}>Go back</Link>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieDetails movie={movie} />}
      <NavLink to="cast">
        <p>Cast</p>
      </NavLink>
      <NavLink to="reviews">
        <p>Reviews</p>
      </NavLink>
      <Outlet />
    </>
  );
}
