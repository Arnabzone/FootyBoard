import React, { useState } from "react";
import { Link } from "react-router-dom";


const positions = [
  {
    name: "Goalkeeper",
    iframe: `<iframe src="https://assets.pinterest.com/ext/embed.html?id=291959988366548845" height="532" width="350" frameborder="0" scrolling="no"></iframe>`,
  },
  {
    name: "Forward",
    iframe: `<iframe src="https://assets.pinterest.com/ext/embed.html?id=776871004510739145" height="782" width="350" frameborder="0" scrolling="no"></iframe>`,
  },
  {
    name: "Midfielder",
    iframe: `<iframe src="https://assets.pinterest.com/ext/embed.html?id=392728030026299916" height="783" width="350" frameborder="0" scrolling="no"></iframe>`,
  },
  {
    name: "Defender",
    iframe: `<iframe src="https://assets.pinterest.com/ext/embed.html?id=12807180187221064" height="790" width="350" frameborder="0" scrolling="no"></iframe>`,
  },
];

function Positions() {
  const [search, setSearch] = useState("");

  const filtered = positions.filter((pos) =>
    pos.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-28 px-6 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r  from-[#ffffff] to-[#f8f8f8] drop-shadow-xl">
        Player Positions
      </h1>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search Position..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 px-5 py-3 rounded-full text-black shadow-md focus:outline-none focus:ring-4 ring-pink-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pb-20">
        {filtered.map((pos, idx) => (
          <Link
            key={idx}
            to={`/positions/${pos.name.toLowerCase()}`}
            className="w-72"
          >
            <div
              className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-4 w-72 relative group hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-center mb-3">
                {pos.name}
              </h2>
              <div
                className="relative h-[400px] overflow-hidden rounded-xl"
                dangerouslySetInnerHTML={{ __html: pos.iframe }}
              ></div>

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl flex items-center justify-center">
                <span className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition">
                  View {pos.name}s
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Positions;
