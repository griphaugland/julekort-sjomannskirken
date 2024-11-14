import React from "react";

interface TinselStrandProps {
  top: string;
  reverse?: boolean;
}

const TinselStrand = ({ top, reverse = false }: TinselStrandProps) => (
  <div className="absolute w-full" style={{ top }}>
    <svg className="w-full h-8" preserveAspectRatio="none" viewBox="0 0 100 20">
      <path
        d={
          reverse
            ? "M0 10 Q 25 20, 50 10 Q 75 0, 100 10"
            : "M0 10 Q 25 0, 50 10 Q 75 20, 100 10"
        }
        fill="none"
        stroke="url(#tinselGradient)"
        strokeWidth="4"
        className="opacity-70"
      />
      <defs>
        <linearGradient id="tinselGradient" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="75%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
    </svg>
    {/* Sparkle effects */}
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
        style={{
          left: `${i * 25}%`,
          top: reverse ? "15px" : "5px",
          animationDelay: `${i * 0.2}s`,
          opacity: 0.8,
        }}
      />
    ))}
  </div>
);

export default TinselStrand;
