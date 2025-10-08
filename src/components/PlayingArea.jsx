import React, { useEffect } from "react";
import { useGame } from "../context/GameContext";
import Timer from "./Timer";
import Hole from "./Hole";

//PlayingArea function has all the props that it needs to run, this makes sense. It also passes the Timer.jsx to App.jsx.
export default function PlayingArea() {
  const { score, timeLeft, activeHole, whackMole, restartGame, endGame } =
    useGame();

  useEffect(() => {
    if (timeLeft <= 0) endGame();
  }, [timeLeft, endGame]);

  return (
    <div className="playing-area">
      <div className="game-info">
        <Timer />
        <p>Score: {score}</p>
        <button onClick={restartGame}>Restart</button>
      </div>

      <div className="holes-grid">
        {[...Array(9)].map((_, i) => (
          <Hole key={i} isActive={i === activeHole} onWhack={whackMole} />
        ))}
      </div>
    </div>
  );
}
