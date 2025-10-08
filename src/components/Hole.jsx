// src/components/Hole.jsx
import React from "react";
import holeImg from "/hole.png";
import moleImg from "/mole.png";

//Hole function uses ternary to display a hole or a mole. undefined is used to cover edge cases(?) of when a click is on a hole not a mole.
export default function Hole({ isActive, onWhack }) {
  return (
    <div className="hole" onClick={isActive ? onWhack : undefined}>
      <img
        src={isActive ? moleImg : holeImg}
        alt={isActive ? "mole" : "hole"}
        style={{
          width: "100px",
          height: "100px",
          cursor: isActive ? "pointer" : "default",
        }}
      />
    </div>
  );
}
