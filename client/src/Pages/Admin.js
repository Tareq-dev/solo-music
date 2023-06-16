import { useEffect, useState } from "react";
import { GiMusicSpell } from "react-icons/gi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { ImEyePlus } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebse_auth";
import MusicCard from "../components/MusicCard";

export default function Admin() {
  const [music, setMusic] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  const url = `http://localhost:5000/${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMusic(data));
  }, []);

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center justify-items-center gap-3 mx-4 py-8">
        <div className="h-20 w-full border rounded-lg bg-slate-100 px-10">
          <div className="flex pt-4 justify-between items-center px-16">
            <div className="flex justify-center items-center">
              <GiMusicSpell className="text-red-500" size={34} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Uploaded </h2>
              <p>
                {music?.length} {music?.length > 1 ? "Songs" : "Song"}
              </p>
            </div>
          </div>
        </div>
        <div className="h-20 w-full border rounded-lg bg-slate-100 px-10">
          <div className="flex pt-4 justify-between items-center px-16">
            <div className="flex justify-center items-center">
              <AiOutlinePlayCircle className="text-red-500" size={34} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Play </h2>
              <p>
                {music?.length} {music?.length > 1 ? "Songs" : "Song"}
              </p>
            </div>
          </div>
        </div>
        <div className="h-20 w-full border rounded-lg bg-slate-100 px-10">
          <div className="flex pt-4 justify-between items-center px-16">
            <div className="flex justify-center items-center">
              <ImEyePlus className="text-red-500" size={34} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Viewers </h2>
              <p>
                {music?.length} {music?.length > 1 ? "Songs" : "Song"}
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          My Uploaded Song
        </h2>

        <div className="mt-6 grid md:grid-cols-4 md:gap-4">
          {music.map((audio) => (
            <MusicCard audio={audio} />
          ))}
        </div>
      </div>
    </div>
  );
}
