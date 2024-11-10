import React from "react";

const ChristmasTree = () => {
  return (
    <div className="relative w-[350px] lg:w-[600px] lg:h-[700px] h-[450px] flex justify-center items-center">
      <div className="relative w-80 h-96 lg:h-full lg:w-96">
        {/* Tree */}
        <div className="relative">
          <div
            className="w-80 lg:w-96 h-[450px] lg:h-[600px] bg-emerald-800 clip-triangle relative"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          >
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
                    className="w-full h-8 text-emerald-700"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 20 Q 80 0, 160 20 Q 240 40, 320 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Ornaments */}
            <button className="absolute w-14 h-14 rounded-full bg-white top-[175px] left-[175px]">
              1
            </button>
            <button className="absolute w-14 h-14 rounded-full bg-blue-300 top-[290px] left-[120px]">
              2
            </button>
            <button className="absolute w-14 h-14 rounded-full bg-purple-400 top-[380px] left-[220px]">
              3
            </button>
            <button className="absolute w-14 h-14 rounded-full bg-orange-200 top-[450px] left-[90px]">
              4
            </button>
            <button className="absolute w-14 h-14 rounded-full bg-green-200 top-[500px] right-1/4">
              5
            </button>
          </div>

          {/* Tree stump */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            {/* Main trunk */}
            <div className="w-12 h-12 bg-amber-800"></div>
            {/* Shadow detail on trunk */}
            <div className="absolute top-0 left-0 w-2 h-12 bg-amber-900/30"></div>
            <div className="absolute top-0 right-0 w-2 h-12 bg-amber-900/30"></div>
          </div>
          {/* Star */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <button
              className="w-20 h-20 bg-yellow-300 hover:bg-yellow-600"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            >
              6
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasTree;
