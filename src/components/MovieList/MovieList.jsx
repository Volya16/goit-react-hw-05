export default function MovieList({ movies }) {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
