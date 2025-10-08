import React from "react";
import { useGame } from "../context/GameContext";

//When time left is less than 5 the time changes to red, other black, ternary.
export default function Timer() {
  const { timeLeft } = useGame();

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
