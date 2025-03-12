import React from "react";
import group from "../assets/hero/group.png";

const Hero = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <span className="text-[1.4rem] leading-none ">Services</span>
        <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase">
          Executive Coaching for <br /> Senior Leaders
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider">
          Gain the knowledge, strategies, and confidence to elevate your
          business with expert guidance.
          <br /> Unlock new opportunities and achieve success with proven
          coaching methods.
        </span>
        <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border transition cursor-pointer">
          Book A Session
        </button>
      </div>

      <div className="mt-12">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[58%] space-y-8">
            <span className="text-[2.5rem] leading-none font-semibold uppercase">
              Unlock Your Leadership Prowress
            </span>
            <span className="text-[1.2rem] leading-7 tracking-widest">
              In today’s volatile and rapidly evolving business environment,
              senior leaders face unprecedented challenges. The need for
              adaptive, high-performing leadership has never been greater. Yet,
              only 18% of leaders feel “very capable” of navigating this
              environment effectively*.
            </span>
            <span className="text-[1.2rem] leading-7 tracking-widest">
              Our executive coaching programs provide a structured, data-backed,
              and results-driven approach to leadership development. These
              programs help executives navigate complexity, enhance
              decision-making, and drive organizational success by equipping
              leaders with the self-awareness, resilience, and strategic insight
              required to drive meaningful transformation within their
              organizations.
            </span>
            <span className="text-[1.2rem] leading-7 tracking-widest">
              Development Dimensions International and The Conference Board
            </span>
          </div>
          <div className=" w-[38%]">
            <div
              className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[480px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${group.src})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
