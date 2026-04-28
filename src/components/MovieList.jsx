import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <section className="movie-list-container">
      <ul className="movie-cards-container">
        {movies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </ul>
    </section>
  );
}
