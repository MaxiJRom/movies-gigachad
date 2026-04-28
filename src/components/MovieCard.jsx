import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <li className="movie-card">
      <Link to={`/${movie.id}`} onClick={() => window.scrollTo(0, 100)}>
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie["poster_path"]}`}
            alt={movie.title}
          />
          <p className="movie-rating">
            ⭐{Number(movie["vote_average"]).toFixed(1)}
          </p>
        </div>
        <div className="movie-text-info">
          <p className="movie-title"> {movie.title || movie.name}</p>{" "}
          <span className="movie-year">
            {new Date(
              movie["release_date"] || movie["first_air_date"],
            ).getFullYear()}
          </span>
        </div>
      </Link>
    </li>
  );
}
