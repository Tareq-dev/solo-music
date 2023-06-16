import React from "react";

function Tracks() {
  return (
    <div className="md:flex py-10 md:py-28 md:mx-10 bg-[#0a183d]">
      <div className="w-full md:w-1/2 mx-2 md:mx-8 flex justify-center items-center">
        <div>
          <h2 className="text-3xl md:text-5xl px-4 text-center font-bold text-white">
            Unlimited Access
            <br /> to 100K tracks
          </h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-2 md:mx-8">
        <p className="text-justify text-md px-6 text-gray-300 py-1">
          Welcome to our music collection website, where you can explore a wide
          range of music from various genres and eras. Our collection includes
          everything from classical music to the latest pop hits, so there's
          something for everyone here.You can browse our collection by genre,
          artist, album, or even by mood, making it easy to find the perfect
          music for any occasion. We've also included playlists curated by our
          team of music experts, so you can discover new music and explore
          different genres.
        </p>
        <button className="bg-red-500 py-2 mr-4 px-8 mt-4 text-white rounded-full">
          Try In Now
        </button>
      </div>
    </div>
  );
}

export default Tracks;
