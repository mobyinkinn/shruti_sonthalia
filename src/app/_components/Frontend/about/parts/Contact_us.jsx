import AnimatedButton from "@/app/utils/Butoon";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Contact_us = () => {
  return (
    <div className=" bg-[#151583] rounded-[35px] p-16 flex flex-col items-center justify-between mt-12 ">
      <div className="text-white items-center flex flex-col space-y-8">
        <h2 className="text-[2.5rem] leading-none font-medium uppercase">
          Ready to Transform Your Leadership?
        </h2>
        <div className="items-center flex flex-col space-y-6">
          <p className="text-[1.4rem] leading-none text-center">
            Join the growing community of leaders investing in their leadership
            journey.
          </p>
          <p className="text-[1.4rem] leading-none text-center ">
            Get in touch today to explore coaching can drive measurable impact
            for you and your organization.
          </p>
        </div>
                  <AnimatedButton name={"Contact Us"}/>
        
        {/* <button className="flex items-center gap-2 px-6 py-4 text-[1.4rem] leading-none font-semibold bg-white text-black rounded-full hover:bg-white hover:text-black border transition">
          Contact Us <FaExternalLinkAlt />
        </button> */}
      </div>
    </div>
  );
};

export default Contact_us;
