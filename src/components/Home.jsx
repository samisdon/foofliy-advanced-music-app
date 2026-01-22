export default function Home({ songs, playSong }) {
  return (
    <div>
      <h3>Trending</h3>
      {songs.map(song => (
        <div key={song.id} className="song" onClick={() => playSong(song)}>
          <b>{song.title}</b>
          <span>{song.artist}</span>
        </div>
      ))}
    </div>
  );
}
