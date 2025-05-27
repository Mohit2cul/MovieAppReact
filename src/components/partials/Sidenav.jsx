import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {


  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-6">
        <h1 className="text-2xl font-bold text-white">
          <i className="text-[#6556CD] text-2xl ri-tv-fill mr-4"></i>
          <span>Home</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-md gap-2">
          <h1 className="text-white text-xl font-normal mt-8 mb-4">
            New Feeds
          </h1>
          <Link className="hover:bg-[#6556CD] p-2 rounded duration-300 hover:text-white font-semibold">
            <i className="ri-fire-fill mr-1"></i>Trending
          </Link>
          <Link className="hover:bg-[#6556CD] p-2 rounded duration-300 hover:text-white font-semibold">
            <i className="ri-bard-fill mr-2"></i>Popular
          </Link>
          <Link className="hover:bg-[#6556CD] p-2 rounded duration-300 hover:text-white font-semibold">
            <i className="ri-movie-2-ai-line mr-2"></i>Movies
          </Link>
          <Link className="hover:bg-[#6556CD] p-2 rounded duration-300 hover:text-white font-semibold">
            <i className="ri-tv-2-fill mr-2"></i>TV shows
          </Link>
          <Link className="hover:bg-[#6556CD] p-2 rounded duration-300 hover:text-white font-semibold">
            <i className="mr-2 ri-team-fill"></i>People
          </Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400 mt-4" />
        <nav className="flex flex-col text-zinc-400 text-md gap-2">
          <h1 className="text-white text-xl font-normal mt-6 mb-5">
            Website Information
          </h1>
          <Link className="hover:bg-[#6556CD] p-2 rounded duration-300 hover:text-white font-semibold">
            <i className="ri-information-2-fill mr-2"></i>About
          </Link>
          <Link className="hover:bg-[#6556CD] p-2 rounded duration-300 hover:text-white font-semibold">
            <i className="ri-phone-fill mr-2"></i>Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
