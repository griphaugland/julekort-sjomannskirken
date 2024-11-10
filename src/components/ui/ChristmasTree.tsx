import React from "react";

interface OrnamentProps {
  color: string;
  top: string;
  left?: string;
  content: string;
}

const Ornament = ({ color, top, left, content }: OrnamentProps) => {
  return (
    <button
      className="absolute w-14 h-14 rounded-full overflow-hidden shadow-lg"
      style={{
        background: `radial-gradient(circle at 35% 35%, white 0%, ${color} 30%, ${color} 40%)`,
        top: top,
        left: left,
      }}
    >
      <div
        className="absolute inset-0 bg-white/20 rounded-full"
        style={{
          clipPath: "ellipse(70% 40% at 65% 30%)",
        }}
      />
      <div className="absolute w-3 h-3 bg-gray-300 rounded-full left-1/2 -top-1.5 transform -translate-x-1/2 shadow-inner" />
      <span className="relative z-10 text-white/80 font-semibold text-xs">
        {content}
      </span>
    </button>
  );
};

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

const ChristmasTree = () => {
  return (
    <div className="relative w-[350px] lg:w-[600px] lg:h-[700px] h-[450px] flex justify-center items-center">
      <div className="relative w-80 h-96 lg:h-full lg:w-96">
        {/* Tree Shadow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-black/20 blur-xl rounded-full" />

        {/* Tree */}
        <div className="relative">
          {/* Multiple layers for depth */}
          <div
            className="absolute w-80 lg:w-96 h-[450px] lg:h-[600px] bg-emerald-900 clip-triangle"
            style={{
              clipPath: "polygon(50% 2%, 2% 98%, 98% 98%)",
              transform: "translateX(4px) translateY(4px)",
            }}
          />
          <div
            className="absolute w-80 lg:w-96 h-[450px] lg:h-[600px] bg-emerald-950 clip-triangle"
            style={{
              clipPath: "polygon(50% 1%, 1% 99%, 99% 99%)",
              transform: "translateX(2px) translateY(2px)",
            }}
          />
          <div
            className="w-80 lg:w-96 h-[450px] lg:h-[600px] relative"
            style={{
              background:
                "linear-gradient(100deg, #166534 0%, #15803d 50%, #166534 100%)",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          >
            {/* Tree texture */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full transform -skew-y-6"
                  style={{
                    top: `${i * 5}%`,
                    background:
                      "linear-gradient(90deg, transparent 0%, #15803d 50%, transparent 100%)",
                    height: "2px",
                  }}
                />
              ))}
            </div>

            {/* Light effect */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)",
              }}
            />

            {/* Tinsel Garland */}
            <TinselStrand top="25%" />
            <TinselStrand top="45%" reverse={true} />
            <TinselStrand top="65%" />
            <TinselStrand top="85%" reverse={true} />

            {/* Decorative waves */}
            <div className="absolute w-full h-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full"
                  style={{
                    top: `${i * 16 + 10}%`,
                  }}
                >
                  <svg
                    className="w-full h-8 text-emerald-500"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                  >
                    <path
                      d="M0 10 Q 25 0, 50 10 Q 75 20, 100 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block absolute inset-0">
            <Ornament
              color="#ff5c5c"
              top="120px"
              left="200px"
              content="Frank"
            />
            <Ornament
              color="#5cffa0"
              top="220px"
              left="100px"
              content="Annette"
            />
            <Ornament
              color="#b45cff"
              top="280px"
              left="300px"
              content="Jan S"
            />
            <Ornament
              color="#ffb45c"
              top="380px"
              left="150px"
              content="Arnstein"
            />
            <Ornament
              color="#ffffff"
              top="440px"
              left="250px"
              content="Åshild"
            />
            <Ornament
              color="#5cffa0"
              top="500px"
              left="180px"
              content="Frode"
            />
          </div>

          {/* Mobile ornaments */}
          <div className="lg:hidden absolute inset-0">
            <Ornament color="#ff5c5c" top="80px" left="140px" content="Frank" />
            <Ornament
              top="170px"
              left="80px"
              content="Annette"
              color="#5cffa0"
            />
            <Ornament
              color="#b45cff"
              top="210px"
              left="180px"
              content="Jan S"
            />
            <Ornament
              color="#ffb45c"
              top="280px"
              left="60px"
              content="Arnstein"
            />
            <Ornament
              color="#5c9fff"
              top="320px"
              left="190px"
              content="Åshild"
            />
            <Ornament color="#5cffa0" top="380px" left="90px" content="Frode" />
          </div>

          {/* Tree stump */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            {/* Stump shadow */}
            <div className="absolute -bottom-2 w-14 h-2 bg-black/20 blur-sm rounded-full" />
            {/* Main trunk with gradient */}
            <div
              className="w-12 h-12 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(45deg, #92400e 0%, #b45309 50%, #92400e 100%)",
              }}
            >
              {/* Trunk texture */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-0.5 bg-amber-900/30"
                    style={{ top: `${i * 20}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Star */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <button
              className="w-24 h-24 relative overflow-hidden"
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
              <span className="relative z-10 text-xs text-yellow-900 hidden">
                Åshild
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasTree;
