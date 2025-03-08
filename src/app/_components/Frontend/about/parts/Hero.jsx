import React from "react";
import hero_banner from "../assets/hero/hero_banner.png";

const Hero = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <span className="text-[1.4rem] leading-none ">About Us</span>
        <span className="text-[2.5rem] leading-none font-semibold tracking-[5%]  uppercase">
          Empowering businesses with <br /> expertise
        </span>
        <span className=" text-[1.4rem] leading-none ">
          With a focus on innovation, efficiency, and people-centric strategies,
          expert coaching fosters a <br /> culture of continuous improvement.
        </span>
        <button className="bg-[#151583] text-white text-[1.4rem] leading-none  rounded-[50px] p-4 text-center cursor-pointer">
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
