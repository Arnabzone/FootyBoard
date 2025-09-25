import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Home/Landing';
import Teams from './Pages/Teams';
import Positions from './Pages/Positions'; 
import TeamDetails from './Pages/TeamDetails';
import Leaderboard from './Pages/Leaderboard';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/positions" element={<Positions />} /> {/* ⬅️ Add this */}
        <Route path="/team/:teamName" element={<TeamDetails />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
    </Router>
  );
}

export default App;