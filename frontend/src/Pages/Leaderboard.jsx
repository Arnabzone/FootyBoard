import React from "react";
import Navbar from "../Components/Navbar";
import { premierLeagueTable } from "./premierLeagueTable";

const getRowClass = (note) => {
  if (note === "Champions League") return "bg-gradient-to-r from-emerald-500/20 to-green-600/30 border-l-4 border-emerald-400";
  if (note === "Europa League") return "bg-gradient-to-r from-blue-500/20 to-indigo-600/30 border-l-4 border-blue-400";
  if (note === "Conference League") return "bg-gradient-to-r from-amber-500/20 to-orange-600/30 border-l-4 border-amber-400";
  if (note === "Relegated") return "bg-gradient-to-r from-red-500/20 to-rose-600/30 border-l-4 border-red-400";
  return "border-l-4 border-transparent";
};

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>
      <Navbar />
      <div className="pt-24 px-6 max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl font-black mb-8 text-center tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
           Premier League Leaderboard
        </h1>
        <div className="overflow-x-auto shadow-2xl rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 ring-1 ring-white/10">
          <table className="min-w-full text-white">
            <thead className="sticky top-0 z-10 bg-gradient-to-r from-slate-800/90 to-purple-800/90 text-white backdrop-blur-xl border-b border-white/20">
              <tr>
                <th className="py-4 px-4 text-left font-bold text-sm tracking-wide uppercase text-gray-200">#</th>
                <th className="py-4 px-4 text-left font-bold text-sm tracking-wide uppercase text-gray-200">Team</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">P</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">W</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">D</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">L</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">GF</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">GA</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">GD</th>
                <th className="py-4 px-4 font-bold text-sm tracking-wide uppercase text-gray-200">Pts</th>
                <th className="py-4 px-4 text-left font-bold text-sm tracking-wide uppercase text-gray-200">Note</th>
              </tr>
            </thead>
            <tbody>
              {premierLeagueTable.map((team) => (
                <tr
                  key={team.position}
                  className={`${getRowClass(team.note)} transition-all duration-200 hover:bg-white/15 hover:shadow-lg hover:scale-[1.01] border-b border-white/10`}
                >
                  <td className="py-3 px-4 font-extrabold text-base text-yellow-400">{team.position}</td>
                  <td className="py-3 px-4 font-semibold text-base text-white">{team.team}</td>
                  <td className="py-3 px-4 text-center font-medium text-sm text-gray-200">{team.played}</td>
                  <td className="py-3 px-4 text-center font-medium text-sm text-green-400">{team.wins}</td>
                  <td className="py-3 px-4 text-center font-medium text-sm text-yellow-400">{team.draws}</td>
                  <td className="py-3 px-4 text-center font-medium text-sm text-red-400">{team.losses}</td>
                  <td className="py-3 px-4 text-center font-medium text-sm text-gray-200">{team.goalsFor}</td>
                  <td className="py-3 px-4 text-center font-medium text-sm text-gray-200">{team.goalsAgainst}</td>
                  <td className="py-3 px-4 text-center font-medium text-sm text-gray-200">{team.goalDifference}</td>
                  <td className="py-3 px-4 text-center font-black text-base text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md">
                    {team.points}
                  </td>
                  <td className="py-3 px-4 font-medium text-sm text-gray-300 italic">{team.note || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Enhanced Legend */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-md border border-white/20">
          <h3 className="text-lg font-semibold mb-4 text-center text-white">Qualification Zones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-600/20 border border-emerald-400/30">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shadow-lg"></div>
              <span className="text-white font-medium text-sm">Champions League</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-blue-400/30">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg"></div>
              <span className="text-white font-medium text-sm">Europa League</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-400/30">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg"></div>
              <span className="text-white font-medium text-sm">Conference League</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-red-500/20 to-rose-600/20 border border-red-400/30">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-400 to-rose-500 shadow-lg"></div>
              <span className="text-white font-medium text-sm">Relegation Zone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;