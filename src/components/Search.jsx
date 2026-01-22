import { useState } from "react";

export default function Search({ songs, playSong }) {
  const [query, setQuery] = useState("");

  const filtered = songs.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Search</h3>
      <input
        className="search"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map(song => (
        <div key={song.id} className="song" onClick={() => playSong(song)}>
          <b>{song.title}</b>
          <span>{song.artist}</span>
        </div>
      ))}
    </div>
  );
}
