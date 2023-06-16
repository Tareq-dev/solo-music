import React from "react";
import { Link } from "react-router-dom";

function AddYourSong() {
  return (
    <div className="py-32 bg-[#e5e7eb] flex justify-center items-center">
      <div className="bg-[#0a183d] w-1/2 md:p-14 rounded-3xl">
        <h1 className="md:text-2xl text-center pt-4 mb-10 text-white font-bold uppercase">
          Upload Your Favourite Song
        </h1>
        <div className="flex justify-center">
          <Link to="/dashboard/add-music">
            <button
              type="submit"
              className="px-4 uppercase w-[200px] py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none"
            >
              Upload
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddYourSong;
