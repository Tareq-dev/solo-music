import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebse_auth";
import { toast } from "react-toastify";
import axios from "axios";

export default function AddSong() {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState(false);
  const [user] = useAuthState(auth);
  const email = user?.email;
  const url = process.env.REACT_APP_BASE_URL;
  const handleAddSong = async (e) => {
    e.preventDefault();
    if (songName.length === 0 || artist.length === 0 || file.length === 0) {
      setErrors(true);
    }
    if (songName && artist && file) {
      // const data = {
      //   songName,
      //   artist,
      //   file,
      //   email,
      // };
      // console.log(data);
      const formData = new FormData();
      formData.append("title", songName);
      formData.append("artist", artist);
      formData.append("file", file);
      formData.append("email", email);

      try {
        await axios
          .post("http://localhost:5000/music/upload_music", formData)
          .then((response) => {
            if (response.status === 200) {
              toast.success("Added Music!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
            e.target.reset();
            return false;
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="relative flex flex-col justify-center py-4 mx-4 overflow-hidden">
      <div
        className="w-full px-10 md:px-16 py-4 m-auto bg-[#0a183d] text-white rounded-md shadow-xl lg:max-w-md"
        encType="multipart/form-data"
      >
        <h1 className="text-3xl font-semibold text-center  uppercase">
          Add Song Here
        </h1>
        <form onSubmit={handleAddSong} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white"
            >
              Song Name
            </label>
            <input
              type="name"
              placeholder="Enter Song Name"
              onChange={(e) => setSongName(e.target.value)}
              value={songName}
              className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border rounded-md"
            />
            {errors && songName.length <= 0 ? (
              <span className="text-sm text-red-500 font-sans font-semibold">
                Song Name is required
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="artist"
              className="block text-sm font-semibold text-white"
            >
              Artist
            </label>
            <input
              type="text"
              placeholder="Enter Artist"
              onChange={(e) => setArtist(e.target.value)}
              value={artist}
              className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border rounded-md"
            />
            {errors && artist.length <= 0 ? (
              <span className="text-sm text-red-500 font-sans font-semibold">
                Artist Name is required
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="my-2 px-4 md:mr-4 ">
            <label
              className="mb-1 block ml-2 text-gray-200"
              htmlFor="fileupload"
            >
              Upload Audio:
            </label>
            <input
              id="fileupload"
              type="file"
              name="file"
              className="py-2 w-[270px] md:w-full bg-[#3b436d] rounded-md shadow-sm md:px-4 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {errors && file.length <= 0 ? (
              <span className="text-sm text-red-500 font-sans font-semibold">
                File is required
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
