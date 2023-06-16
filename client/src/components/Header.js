import React from "react";
import hero from "../assets/image/hero.png";
function Header() {
  return (
    <div className="bg-[#0a183d] h-[600px] md:h-[500px] py-4 md:flex justify-between w-full px-4">
      <div className="md:w-1/2 flex items-center justify-center py-4 px-4 md:ml-20">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            <span className="text-red-500">Music</span> for
            <br /> everyone.
          </h1>
          <p className="md:text-md text-white text-justify py-4 md:pr-8">
            Welcome to our music website, your one-stop destination for all
            things music! We are passionate about providing you with the latest
            news, reviews, and updates from the music industry.
          </p>
          <button
            className="bg-red-500 rounded-2xl px-4 py-2 mt-4 text-white font-semibold "
            type=""
          >
            Explore More
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center px-4">
        <img src={hero} alt="" className="h-[350px] md:h-[400px]" />
      </div>
    </div>
  );
}

export default Header;
