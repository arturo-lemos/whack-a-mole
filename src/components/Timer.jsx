// src/components/Timer.jsx
import React from "react";
import { useGame } from "../context/GameContext";

export default function Timer() {
  const { timeLeft } = useGame();

  // Optional: visual color change when time is low
  const timerStyle = {
    color: timeLeft <= 5 ? "red" : "black",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  return (
    <div className="timer" style={timerStyle}>
      Time Left: {timeLeft}s
    </div>
  );
}
