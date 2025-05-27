import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";

const Topnav = () => {
  const [query, setquery] = useState("");
  const GetSearches = async () => {
    try {
      const d = await axios.get(`/search/multi?query=${query}`);
      console.log(d);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start ml-[20%] items-center gap-5">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-xl outline-none border-none bg-transparent text-zinc-400 py-[4px]"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="cursor-pointer text-4xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="w-[60%] h-[60vh] absolute top-[105%] overflow-auto">
        {/* <Link className="text-zinc-400 font-semibold hover:text-zinc-100 hover:bg-zinc-600 w-[100%] inline-block p-6 flex justify-start border-zinc-100 items-center">
          <img src="" alt="" />
          <span>Hello</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
