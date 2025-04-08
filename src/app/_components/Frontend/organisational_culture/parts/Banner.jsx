import React from "react";
import banner from "../assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] mt-12 overflow-hidden">
      <Image
        src={banner}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-8 py-5">
        <p className="text-white text-lg md:text-xl max-w-4xl mb-6">
          At RuhCo, we believe that culture is the invisible thread that holds
          strategy, performance, and people together. And when it's misaligned,
          even the best strategies falter. That’s why shaping a thriving culture
          is at the core of everything we do.
        </p>
      </div>
    </div>
  );
};

export default Banner;
