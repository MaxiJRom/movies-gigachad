export default function CastCard({ person }) {
  return (
    <article className="cast-card">
      <img
        src={`https://image.tmdb.org/t/p/w185${person.profile_path})`}
        alt={person.name}
      />
      <h4>{person.name}</h4>
    </article>
  );
}
