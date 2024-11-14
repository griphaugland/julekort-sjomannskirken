"use client";
import React from "react";

function Star() {
  return (
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
      <button
        className="w-24 h-24 relative overflow-hidden"
        onClick={() => {
          console.log("Star clicked!");
        }}
        style={{
          background: "linear-gradient(45deg, #ffd700, #fff6a6)",
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
        }}
      >
        <div
          className="absolute inset-0 bg-white/40"
          style={{
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            transform: "translateY(-50%)",
          }}
        />
        <span className="relative z-10 text-xs text-black/50 hidden">?</span>
      </button>
    </div>
  );
}

export default Star;
