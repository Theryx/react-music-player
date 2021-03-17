import { useState } from "react";
//Imported Styles
import "./styles/app.scss";
//Adding components

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//Importing Util
import data from "./util";
function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
