import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#eee', marginBottom: '2rem' }}>
        <Link to="/activities" style={{ marginRight: '1rem' }}>Activities</Link>
        <Link to="/leaderboard" style={{ marginRight: '1rem' }}>Leaderboard</Link>
        <Link to="/teams" style={{ marginRight: '1rem' }}>Teams</Link>
        <Link to="/users" style={{ marginRight: '1rem' }}>Users</Link>
        <Link to="/workouts">Workouts</Link>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </Router>
  );
}

export default App;
