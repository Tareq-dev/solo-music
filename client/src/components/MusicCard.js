import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import playPic from "../assets/image/music.png";

export default function MusicCard({ audio }) {
  const audioSrc = `../../upload/${audio.audio}`;
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(audioSrc);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  // const handleDelete = (id) => {
  //   console.log(id);
  // };

  return (
    <div className="component-music py-2 w-full relative">
      {/* <div
        onClick={() => handleDelete(audio._id)}
        className="absolute right-3 top-3 md:right-1 md:top-1 bg-red-500 rounded-full w-8 h-8 flex  justify-center items-center"
      >
        <RiDeleteBin6Line size={20} />
      </div> */}
      <div className="flex justify-center px-4">
        <img className="rounded-xl h-[90px]  px-6" src={playPic} />
      </div>
      <div>
        <h3 className="text-center py-1 text-gray-300">{audio.artist}</h3>
        <p className="text-center py-1 text-gray-300 ">{audio.title}</p>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="timeline w-full "
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#f31823" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#f31823" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#f31823" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#f31823" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
