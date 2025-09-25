import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TeamDetails = () => {
  const { teamName } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`http://localhost:8080/api/v1/player?team=${encodeURIComponent(teamName)}`)
      .then((response) => {
        setPlayerData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [teamName]);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center">
      <div className="text-xl font-semibold text-white">Loading squad data...</div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center">
      <div className="text-xl font-semibold text-red-400">Error: {error.message}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="pt-16 px-6 max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl font-black mb-12 text-center tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
          {teamName} Squad
        </h1>
        
        <div className="overflow-x-auto shadow-2xl rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 ring-1 ring-white/10">
          <table className="min-w-full text-white">
            <thead className="sticky top-0 z-10 bg-gradient-to-r from-slate-800/90 to-purple-800/90 text-white backdrop-blur-xl border-b border-white/20">
              <tr>
                <th className="py-4 px-4 text-left font-bold text-sm tracking-wide uppercase text-gray-200">Player Name</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Position</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Age</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Matches</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Starts</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Minutes</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Goals</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Assists</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Penalties</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Yellow</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">Red</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">xG</th>
                <th className="py-4 px-4 text-center font-bold text-sm tracking-wide uppercase text-gray-200">xAG</th>
                <th className="py-4 px-4 text-left font-bold text-sm tracking-wide uppercase text-gray-200">Club</th>
              </tr>
            </thead>
            <tbody>
              {playerData.map((player, idx) => (
                <tr
                  key={player.name}
                  className={`${idx % 2 === 1 ? 'bg-white/5' : ''} transition-all duration-200 hover:bg-white/15 hover:shadow-lg hover:scale-[1.005] border-b border-white/10`}
                >
                  <td className="py-4 px-4 font-semibold text-base text-white">{player.name}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      {player.position}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-sm text-gray-300">{player.age}</td>
                  <td className="py-4 px-4 text-center font-medium text-sm text-gray-300">{player.mp}</td>
                  <td className="py-4 px-4 text-center font-medium text-sm text-gray-300">{player.starts}</td>
                  <td className="py-4 px-4 text-center font-medium text-sm text-gray-300">{player.min}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-bold text-sm ${player.goals > 0 ? 'text-green-400' : 'text-gray-400'}`}>
                      {player.goals}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-bold text-sm ${player.assists > 0 ? 'text-purple-400' : 'text-gray-400'}`}>
                      {player.assists}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-sm text-gray-300">{player.penalties}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-medium text-sm ${player.yellow_cards > 0 ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {player.yellow_cards}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-medium text-sm ${player.red_cards > 0 ? 'text-red-400' : 'text-gray-400'}`}>
                      {player.red_cards}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-sm text-gray-300">{player.expected_goals}</td>
                  <td className="py-4 px-4 text-center font-medium text-sm text-gray-300">{player.expected_assists}</td>
                  <td className="py-4 px-4 font-medium text-sm text-gray-400">{player.team_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-md border border-green-400/30">
            <div className="text-2xl font-bold text-green-400">
              {playerData.reduce((sum, player) => sum + (player.goals || 0), 0)}
            </div>
            <div className="text-sm text-gray-300 font-medium">Total Goals</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-violet-600/20 backdrop-blur-md border border-purple-400/30">
            <div className="text-2xl font-bold text-purple-400">
              {playerData.reduce((sum, player) => sum + (player.assists || 0), 0)}
            </div>
            <div className="text-sm text-gray-300 font-medium">Total Assists</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-md border border-blue-400/30">
            <div className="text-2xl font-bold text-blue-400">
              {playerData.length}
            </div>
            <div className="text-sm text-gray-300 font-medium">Squad Size</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-md border border-yellow-400/30">
            <div className="text-2xl font-bold text-yellow-400">
              {Math.round(playerData.reduce((sum, player) => sum + (player.age || 0), 0) / playerData.length)}
            </div>
            <div className="text-sm text-gray-300 font-medium">Avg Age</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;