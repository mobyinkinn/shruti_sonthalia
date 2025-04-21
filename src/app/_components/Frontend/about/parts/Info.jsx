"use client";

import React from "react";
import CountUp from "react-countup";

const Info = () => {
  return (
    <div className="relative my-10">
      <div className=" inset-0 flex flex-col">
        <div className="text-[#151583] text-[1.9rem] leading-[2.4rem] space-y-2  flex flex-col items-center justify-evenly">
          <div className="text-[#151583] flex w-full justify-between">
            <StatCard label="Increase in Productivity" end={86} suffix="%" />
            <StatCard label="Higher Team Performance" end={25} suffix="%" />
            <StatCard label="Return on Investment" end={5} suffix="X" />
            <StatCard
              label="Improvement in Work Performance"
              end={70}
              suffix="%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, end, suffix }) => {
  return (
    <div className="flex flex-col items-center">
      <CountUp
        start={0}
        end={end}
        duration={2}
        suffix={suffix}
        useEasing
        enableScrollSpy
      >
        {({ countUpRef }) => (
          <span
            className="text-[3.5rem] leading-[4.3rem] font-medium"
            ref={countUpRef}
          ></span>
        )}
      </CountUp>
      <span className="text-[1.4rem] text-black leading-[2.4rem]">{label}</span>
    </div>
  );
};

export default Info;
