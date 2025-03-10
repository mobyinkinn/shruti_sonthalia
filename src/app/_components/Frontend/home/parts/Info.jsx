"use client";

import React from "react";
import CountUp from "react-countup";

const Info = () => {
  return (
    <div className="relative z-[1] mx-auto mt-8  w-[100%] bg-[#151583] bg-no-repeat bg-top bg-cover bg-fixed py-[81px] pb-[94px]">
      <div className="absolute inset-0 flex flex-col">
        <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-evenly h-[100%] flex-wrap">
          <div className="text-white flex w-[90%] justify-around">
            <StatCard label="Satisfied Clients" end={1625} suffix="+" />
            <StatCard label="Years Of Experience" end={20} suffix="+" />
            <StatCard label="Awards Won" end={10} suffix="+" />
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
            className="text-[2.5rem] leading-[4.3rem] font-bold"
            ref={countUpRef}
          ></span>
        )}
      </CountUp>
      <span className="text-[1.4rem] leading-[2.4rem]">{label}</span>
    </div>
  );
};

export default Info;
