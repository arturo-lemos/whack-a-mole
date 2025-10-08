import React, { createContext, useContext, useState, useEffect } from "react";

// I am not sure what useEffect is for but I see it will be discussed today. The GameContext is by far the longest Component. I can follow the logic and see how it tells the computer what to do, step by step.

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [activeHole, setActiveHole] = useState(null);

  const getRandomHole = () => Math.floor(Math.random() * 9);

  const startGame = () => {
    setScore(0);
    setTimeLeft(15);
    setIsPlaying(true);
    setActiveHole(getRandomHole());
  };

  const restartGame = () => startGame();

  const endGame = () => {
    setIsPlaying(false);
    setPreviousScore(score);
    setActiveHole(null);
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    setActiveHole(getRandomHole());
  };

  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft <= 0) {
      endGame();
      return;
    }

    const time = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(time);
  }, [isPlaying, timeLeft]);

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        score,
        previousScore,
        timeLeft,
        activeHole,
        startGame,
        restartGame,
        endGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
