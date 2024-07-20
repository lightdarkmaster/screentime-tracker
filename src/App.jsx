import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [screenTime, setScreenTime] = useState(0); // in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elapsedInterval = setInterval(() => {
      setScreenTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(elapsedInterval);
  }, []);

  // Format the screen time in HH:MM:SS
  const formatScreenTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="container">
        <h1>ScreenTime Tracker</h1>
        <h3>by: Christian Barbosa</h3>
        <div className="card">
          <p>Current Time: {currentTime}</p>
          <p>Screen Time: {formatScreenTime(screenTime)}</p>
        </div>
      </div>
    </>
  );
}

export default App;
