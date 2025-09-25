import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import teams from "./teamData";

function Teams() {
  const [search, setSearch] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="pt-28 px-6 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#f8f8f8] drop-shadow-xl">
          Premier League Teams
        </h1>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search Teams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 px-5 py-3 rounded-full text-black shadow-md focus:outline-none focus:ring-4 ring-purple-400"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center pb-20">
          {filteredTeams.map((team, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-2xl p-4 w-48 text-center border border-white/20 hover:scale-105 hover:shadow-purple-400 transition duration-300"
            >
              <img
                src={team.logo}
                alt={team.name}
                className="h-20 mx-auto mb-3 object-contain"
              />
              <h2 className="font-semibold mb-2">{team.name}</h2>
              <Link to={`/team/${encodeURIComponent(team.name)}`}>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full mt-2 hover:opacity-90 transition duration-300 text-sm">
                  View Stats
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Teams;
