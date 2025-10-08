import React from "react";
import { GameProvider, useGame } from "./context/GameContext";
import Start from "./components/Start";
import PlayingArea from "./components/PlayingArea";
import "./index.css";

function ScreenManager() {
  const { isPlaying } = useGame();
  return isPlaying ? <PlayingArea /> : <Start />;
}

export default function App() {
  return (
    <GameProvider>
      <div className="app">
        <ScreenManager />
      </div>
    </GameProvider>
  );
}
