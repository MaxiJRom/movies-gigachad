import { useEffect } from "react";
import { loadAllMovies } from "../features/movies/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";

export default function Movies() {
  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllMovies());
  }, [dispatch]);

  return (
    <>
      <h2 className="home-h2">Popular movies:</h2>
      <MovieList movies={movies} />
    </>
  );
}
