import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //ref
  const audioRef = useRef(null);
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="player">
      <h1>Player</h1>
      <div className="time-control">
        <p>Staet time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />

        <FontAwesomeIcon
          className="skip-foward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
