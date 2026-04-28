import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMovies } from "../features/movies/moviesSlice";

export default function Search() {
  const [searchParams] = useSearchParams();
  const searchResults = useSelector((state) => state.search.searchResults);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(searchResults));
  }, [dispatch, searchResults]);

  console.log(searchParams.get("query"));

  return (
    <div className="search-page">
      <h3>{`Resultados para: "${searchParams.get("query")}"`}</h3>
      <MovieList movies={searchResults} />;
    </div>
  );
}
