import AnimatedButton from "@/app/utils/Butoon";
import React from "react";

const Contact_us = ({ heading, line1, line2, button_Name, bg_image }) => {
  return (
    <div
      className="rounded-[35px] mx-5 p-16 flex flex-col items-center justify-between mt-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg_image?.src})`,
        backgroundColor: "#151583",
      }}
    >
      <div className="text-white items-center flex flex-col space-y-8">
        <h2 className="text-[2.5rem] text-center leading-none font-medium uppercase">
          {heading}
        </h2>
        <div className="items-center flex flex-col space-y-6 leading-12">
          <p className="text-[1.4rem] text-center leading-8">{line1}</p>
          <p className="text-[1.4rem] leading-none text-center ">{line2}</p>
        </div>
        <AnimatedButton name={button_Name ? button_Name : "Contact Us"} />
      </div>
    </div>
  );
};

export default Contact_us;
