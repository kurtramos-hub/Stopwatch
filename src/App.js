import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h2>{formatTime()}</h2>
      <div>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{ marginRight: "10px", padding: "10px 20px" }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
          style={{ padding: "10px 20px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}