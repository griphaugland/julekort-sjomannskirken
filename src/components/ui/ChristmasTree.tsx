"use client";
import React, { useState } from "react";
import { Ornament, OrnamentDialog } from "./Ornament";
import Star from "./Star";
import TinselStrand from "./TinselStrand";

const ChristmasTree = () => {
  const [selectedOrnament, setSelectedOrnament] = useState<string | null>(null);

  const handleOrnamentClick = (content: string) => {
    setSelectedOrnament(content);
  };

  const handleStarClick = () => {
    setSelectedOrnament("Star");
  };

  const handleDialogClose = () => {
    setSelectedOrnament(null);
  };

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
              color="#5ba1eb"
              top="120px"
              left="190px"
              content="Frank"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#f06060"
              top="230px"
              left="120px"
              content="Annette"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#ebcd5b"
              top="320px"
              left="220px"
              content="Jan S"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#5ba1eb"
              top="390px"
              left="110px"
              content="Arnstein"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#ebcd5b"
              top="490px"
              left="40px"
              content="Åshild"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#f06060"
              top="520px"
              left="240px"
              content="Frode"
              onOrnamentClick={handleOrnamentClick}
            />
          </div>

          {/* Mobile ornaments */}
          <div className="lg:hidden absolute inset-0">
            <Ornament
              color="#5ba1eb"
              top="80px"
              left="140px"
              content="Frank"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              top="170px"
              left="80px"
              content="Annette"
              color="#ebcd5b"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#f06060"
              top="210px"
              left="180px"
              content="Jan S"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#5ba1eb"
              top="280px"
              left="60px"
              content="Arnstein"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#ebcd5b"
              top="320px"
              left="190px"
              content="Åshild"
              onOrnamentClick={handleOrnamentClick}
            />
            <Ornament
              color="#f06060"
              top="380px"
              left="90px"
              content="Frode"
              onOrnamentClick={handleOrnamentClick}
            />
          </div>

          {/* Dialog */}
          <OrnamentDialog
            isOpen={!!selectedOrnament}
            onClose={handleDialogClose}
            content={selectedOrnament || ""}
          />

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
          <Star onStarClicked={handleStarClick} />
        </div>
      </div>
    </div>
  );
};

export default ChristmasTree;
