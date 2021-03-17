import LibrarySong from "./LibrarySong";
const Library = ({ audioRef, songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
