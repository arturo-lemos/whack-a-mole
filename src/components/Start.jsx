import React from "react";
import { useGame } from "../context/GameContext";

export default function Start() {
    const { previousScore, startGame} = useGame();

    return (
        <div className="start-screen">
            <h1>Whack-a-Mole</h1>
            {previousScore !== null && (
                <p>Your Score: <strong>{previousScore}</strong></p>
            )}
            <button onClick={startGame} className="start-btn">
                Start Game
            </button>
        </div>
    )
}