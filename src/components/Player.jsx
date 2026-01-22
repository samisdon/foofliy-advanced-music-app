export default function Player({ song, isPlaying, setIsPlaying, nextSong, prevSong }) {
  return (
    <div className="player glass">
      <div>
        <b>{song.title}</b>
        <span>{song.artist}</span>
      </div>

      <div className="controls">
        <button onClick={prevSong}>⏮</button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={nextSong}>⏭</button>
      </div>
    </div>
  );
}
