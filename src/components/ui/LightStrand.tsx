import React from "react";

interface LightStrandProps {
  top: string;
  reverse?: boolean;
  strandIndex: number;
}

const LightStrand = ({
  top,
  reverse = false,
  strandIndex,
}: LightStrandProps) => {
  const colors = ["#f44336", "#4caf50", "#2196f3", "#ffeb3b", "#ff9800"];

  // Deterministic color selection based on strand and light position
  const getColor = (lightIndex: number) => {
    // Use the strand index and light index to create a deterministic pattern
    const colorIndex = (strandIndex + lightIndex) % colors.length;
    return colors[colorIndex];
  };

  return (
    <div className="absolute w-full" style={{ top }}>
      {/* Wire */}
      <svg
        className="w-full h-8"
        preserveAspectRatio="none"
        viewBox="0 0 100 20"
      >
        <path
          d={
            reverse
              ? "M0 10 Q 25 20, 50 10 Q 75 0, 100 10"
              : "M0 10 Q 25 0, 50 10 Q 75 20, 100 10"
          }
          fill="none"
          stroke="#2c2c2c"
          strokeWidth="1"
          className="opacity-70"
        />
      </svg>

      {/* Lights */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 -mt-1.5"
          style={{
            left: `${i * 14 + 2}%`,
            top: reverse ? "15px" : "5px",
          }}
        >
          {/* Light bulb */}
          <div
            className="absolute w-full h-full rounded-full animate-pulse"
            style={{
              backgroundColor: getColor(i),
              boxShadow: `0 0 8px 2px ${getColor(i)}`,
              animation: `pulse 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
          {/* Light reflection */}
          <div className="absolute w-1 h-1 rounded-full bg-white/80 top-0.5 left-0.5" />
        </div>
      ))}
    </div>
  );
};

const ChristmasLights = () => {
  return (
    <>
      <LightStrand top="15%" strandIndex={0} />
      <LightStrand top="35%" reverse={true} strandIndex={1} />
      <LightStrand top="55%" strandIndex={2} />
      <LightStrand top="75%" reverse={true} strandIndex={3} />
      <LightStrand top="95%" strandIndex={4} />
    </>
  );
};

export default ChristmasLights;
