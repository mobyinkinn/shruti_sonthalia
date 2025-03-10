import React from "react";
import hero_banner from "../assets/hero/hero_banner.png";

const Hero = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <span className="text-[1.4rem] leading-none ">About Us</span>
        <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase">
          Empowering businesses with <br /> expertise
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider">
          With a focus on innovation, efficiency, and people-centric strategies,
          expert coaching fosters a <br /> culture of continuous improvement.
        </span>
        <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border  transition">
          Book A Session
        </button>
      </div>

      <div className="mt-12">
        <div
          className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[434px] xl:min-h-[600px] bg-cover bg-center rounded-[60px]"
          style={{ backgroundImage: `url(${hero_banner.src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
