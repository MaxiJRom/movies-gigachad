import CastCard from "./CastCard";

export default function MovieDetails({ movieInfo, movieCast }) {
  return (
    <main>
      <img
        className="backdrop_image"
        src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
        alt={movieInfo.title}
      />
      <section className="movie-by-id-section">
        <div className="movie-details-container">
          <img
            className="poster-image"
            src={`https://image.tmdb.org/t/p/w500${movieInfo["poster_path"]}`}
            alt={movieInfo.title}
          />
          <article className="movie-details">
            <h2 className="title">{movieInfo.title}</h2>
            <h3 className="tagline">{movieInfo.tagline}</h3>
            <p className="overview">{movieInfo.overview}</p>
            <p className="genres">
              {movieInfo.genres &&
                movieInfo.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="runtime">{movieInfo.runtime} min</p>
            <p className="release-date">
              {new Date(movieInfo.release_date).getFullYear()}
            </p>
          </article>
        </div>
        <div className="movie-cast">
          {movieCast.map((person, index) => (
            <CastCard person={person} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
