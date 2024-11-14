import React from "react";

interface StarProps {
  onStarClicked: () => void;
}

export function Star({ onStarClicked }: StarProps) {
  return (
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
      <button
        className="w-24 h-24 relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 group"
        onClick={onStarClicked}
        style={{
          background: "linear-gradient(45deg, #ffd700, #fff6a6)",
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      >
        <div
          className="absolute inset-0 bg-white/40 transition-transform duration-300 group-hover:translate-y-[-45%]"
          style={{
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            transform: "translateY(-50%)",
          }}
        />
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,215,0,0.4) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        </div>
        <span className="relative z-10 text-xs text-inherit hidden">?</span>
      </button>
    </div>
  );
}

export default Star;
