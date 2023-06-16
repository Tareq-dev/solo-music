import React, { useEffect, useState } from "react";
import AudioControl from "./AudioControls";

function AllMusic() {
  const [music, setMusic] = useState([]);
  const url = process.env.REACT_APP_BASE_URL;
  console.log(url);
  useEffect(() => {
    fetch("http://localhost:5000/music")
      .then((res) => res.json())
      .then((data) => setMusic(data));
  }, [url]);
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl uppercase text-center py-8 font-bold tracking-tight text-gray-900">
        All Uploded Song
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-2">
        {music.map((audio) => (
          <AudioControl key={audio._id} audio={audio} />
        ))}
      </div>
    </div>
  );
}

export default AllMusic;
