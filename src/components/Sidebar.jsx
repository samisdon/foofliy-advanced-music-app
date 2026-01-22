export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar glass">
      <h2>🎵 Foofliy</h2>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("search")}>Search</button>
      <button onClick={() => setPage("library")}>Library</button>
    </div>
  );
}
