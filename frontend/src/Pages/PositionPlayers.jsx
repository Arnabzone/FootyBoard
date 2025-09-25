import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PositionPlayers() {
  const { positionName } = useParams();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/player?position=${encodeURIComponent(positionName)}`
        );
        setPlayers(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [positionName]);

  return (
    <div className="pt-28 px-6 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#f8f8f8] drop-shadow-xl">
        {positionName.charAt(0).toUpperCase() + positionName.slice(1)}s
      </h1>
      
      {loading ? (
        <div className="text-center text-xl">Loading players...</div>
      ) : error ? (
        <div className="text-center text-red-400 text-xl">
          Error: {error}
        </div>
      ) : players.length === 0 ? (
        <div className="text-center text-xl">
          No players found for this position.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-white">
            <thead>
              <tr className="bg-[#37003c]">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Team</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Goals</th>
                <th className="px-4 py-2">Assists</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr 
                  key={`${player.name}-${index}`}
                  className={index % 2 === 0 ? 'bg-white/10' : 'bg-white/5'}
                >
                  <td className="px-4 py-2">{player.name}</td>
                  <td className="px-4 py-2">{player.team}</td>
                  <td className="px-4 py-2">{player.age}</td>
                  <td className="px-4 py-2">{player.gls}</td>
                  <td className="px-4 py-2">{player.ast}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PositionPlayers;
