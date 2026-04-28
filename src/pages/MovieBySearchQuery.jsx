import { useSelector } from "react-redux";
import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MovieList";

export default function MovieBySearchQuery() {
  const currentMovieInfo = useSelector(
    (state) => state.movies.currentMovie.info,
  );
  const currentMovieCast = useSelector(
    (state) => state.movies.currentMovie.cast,
  );

  const movieList = useSelector((state) => state.search.searchResults);

  return (
    <>
      <MovieDetails movieInfo={currentMovieInfo} movieCast={currentMovieCast} />
      <MovieList movies={movieList} />
    </>
  );
}
