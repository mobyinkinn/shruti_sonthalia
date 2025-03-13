import React from "react";
import hero from "../assets/hero/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <span className="text-[1.4rem] leading-none ">Services</span>
        <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase">
          Master Transformational
          <br /> Leadership
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider">
          Develop essential coaching techniques, enhance leadership abilities,
          and drive meaningful
          <br /> transformation in businesses and teams
        </span>
        <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border transition cursor-pointer">
          Book A Session
        </button>
      </div>

      <div className="mt-12">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[58%] space-y-8 justify-center">
            <span className="text-[2.5rem] leading-none font-semibold uppercase">
              Lead with Influence, Not Authority
            </span>
            <span className="text-[1.2rem] leading-7 tracking-widest">
              In today’s fast-changing business landscape, leaders who embrace
              coaching skills unlock deeper team engagement, higher performance,
              and sustainable success. Our Coaching Skills Program isn’t just
              another leadership course—it is a results-driven program designed
              to enhance how leaders communicate, inspire, and empower their
              teams, with measurable improvements in engagement, performance,
              and collaboration.
            </span>
          </div>
          <div className=" w-[38%]">
            <div
              className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[400px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${hero.src})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
