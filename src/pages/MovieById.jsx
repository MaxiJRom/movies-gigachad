import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieCastById,
  fetchMovieInfoById,
} from "../features/movies/moviesSlice";

import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MovieList";

export default function MovieById() {
  const params = useParams();

  let movieInfo = useSelector((state) => state.movies.currentMovie.info);
  let movieCast = useSelector((state) => state.movies.currentMovie.cast);

  const movieList = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieCastById(params.id));
    dispatch(fetchMovieInfoById(params.id));
  }, [dispatch, params.id, movieInfo.backdrop_path]);

  return (
    <>
      <MovieDetails movieInfo={movieInfo} movieCast={movieCast} />
      <MovieList movies={movieList} />
    </>
  );
}
