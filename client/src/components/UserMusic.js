import React, { useEffect, useState } from "react";
import AudioControl from "./AudioControls";
import { Link } from "react-router-dom";

function UserMusic() {
  const [music, setMusic] = useState([]);
  const url = 'https://solo-musics.vercel.app';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMusic(data));
  }, [url]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl uppercase text-center py-8 font-bold tracking-tight text-gray-900">
        Uploaded Song
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-2">
        {music.slice(0, 8).map((audio) => (
          <AudioControl key={audio._id} audio={audio} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-16">
        <Link to="/all-music">
          <button
            className="text-xl bg-red-500 text-white px-10 py-1 rounded-2xl "
            type=""
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserMusic;
