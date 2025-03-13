import AnimatedButton from "@/app/utils/Butoon";
import React from "react";

const Contact_us = ({ heading, line1, line2 }) => {
  return (
    <div className=" bg-[#151583] rounded-[35px] p-16 flex flex-col items-center justify-between mt-12 ">
      <div className="text-white items-center flex flex-col space-y-8">
        <h2 className="text-[2.5rem] leading-none font-medium uppercase">
          {heading}
        </h2>
        <div className="items-center flex flex-col space-y-6">
          <p className="text-[1.4rem] leading-none text-center">{line1}</p>
          <p className="text-[1.4rem] leading-none text-center ">{line2}</p>
        </div>
        <AnimatedButton name={"Contact Us"} />
      </div>
    </div>
  );
};

export default Contact_us;
