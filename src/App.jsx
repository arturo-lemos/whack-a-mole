import React from "react";

//I believe these are components that App uses. Timer.jsx is not needed because it's part of PlayingArea.jsx.
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
