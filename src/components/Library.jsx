export default function Library({ songs, playSong }) {
  return (
    <div>
      <h3>Your Library</h3>
      {songs.map(song => (
        <div key={song.id} className="song" onClick={() => playSong(song)}>
          <b>{song.title}</b>
          <span>{song.artist}</span>
        </div>
      ))}
    </div>
  );
}
