import React, { useEffect, useState } from 'react';

const LEADERBOARD_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', LEADERBOARD_API);
        console.log('Fetched leaderboard data:', data);
        setLeaders(data.results || data);
      });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, idx) => (
          <li key={leader.id || idx}>{leader.name || JSON.stringify(leader)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
