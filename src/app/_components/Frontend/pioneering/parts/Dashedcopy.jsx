
"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollTimelinecopy() {
  const containerRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const triggerOffset = window.innerHeight * 0.5;

      const distanceIntoView = Math.max(triggerOffset - rect.top, 0);
      const clampedDistance = Math.min(distanceIntoView, rect.height);

      const slowFactor = 1;
      setFillHeight(clampedDistance * slowFactor);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCircles = 12;
  const height = 6000;
  const gap = height / totalCircles;

  return (
    <div className="h-[500vh] flex items-start justify-center pt-40 w-[10%]">
      <div
        ref={containerRef}
        className="relative h-[6000px] w-10 flex flex-col items-center"
      >
        {/* Dashed Line */}
        <div className="absolute top-0 w-1 h-full z-0">
          <div className="w-full h-full border-l-2 border-indigo-300 border-dashed"></div>
        </div>

        {/* Filled Line */}
        <div
          className="absolute w-1 bg-[#151583] z-10 transition-all duration-200 ease-linear"
          style={{ height: `${fillHeight}px` }}
        ></div>

        {/* Circles */}
        {Array.from({ length: totalCircles }).map((_, i) => {
          const circleTop = i * gap;
          const isActive = fillHeight >= circleTop + 16; // +16 to account for center of circle
          return (
            <div
              key={i}
              className={`z-20 w-8 h-8 rounded-full bg-indigo-300 flex items-center justify-center transition-transform duration-300 ease-out`}
              style={{
                transform: isActive ? "scale(1.5)" : "scale(1)",
                marginTop: i === 0 ? 0 : `${gap - 32}px`,
              }}
            >
              <div className="w-4 h-4 bg-[#151583] rounded-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
