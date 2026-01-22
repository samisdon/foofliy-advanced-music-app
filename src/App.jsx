import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";
import Player from "./components/Player";
import songsData from "./data/songs";

export default function App() {
  const [page, setPage] = useState("home");
  const [songs] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  function playSong(song) {
    setCurrentSong(song);
    setIsPlaying(true);
  }

  function nextSong() {
    const index = songs.findIndex(s => s.id === currentSong.id);
    setCurrentSong(songs[(index + 1) % songs.length]);
  }

  function prevSong() {
    const index = songs.findIndex(s => s.id === currentSong.id);
    setCurrentSong(songs[(index - 1 + songs.length) % songs.length]);
  }

  return (
    <div className="container">
      <Sidebar setPage={setPage} />

      <div className="main">
        {page === "home" && <Home songs={songs} playSong={playSong} />}
        {page === "search" && <Search songs={songs} playSong={playSong} />}
        {page === "library" && <Library songs={songs} playSong={playSong} />}
      </div>

      <Player
        song={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </div>
  );
}
