import { useParams } from "react-router-dom";
import { directors } from "./DirectorList";

function MovieCard() {
  const { directorId, movieId } = useParams();

  const director = directors.find(
    (director) => director.id === Number(directorId)
  );

  const movie = director?.movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return <h2>Movie not found.</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Duration: {movie.duration} minutes</p>
      <p>{movie.genre}</p>
    </div>
  );
}

export default MovieCard;