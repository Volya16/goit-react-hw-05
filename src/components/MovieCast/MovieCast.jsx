import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCreditsById } from "../../api/apiServer";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMovieCreditsById(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <>
      {error && <ErrorMessage />}
      <Loader loading={isLoading} />
      {cast.length > 0 ? (
        <ul>
          {cast.map((item) => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : defaultImg
                }
                width={250}
                alt={item.name}
              />
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast</p>
      )}
    </>
  );
}
