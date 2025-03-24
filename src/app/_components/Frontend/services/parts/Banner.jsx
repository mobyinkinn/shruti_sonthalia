import React from "react";
import group from "../assets/hero/group.png";

const Banner = () => {
  return (
    <div className="flex flex-col ">

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

export default Banner;
