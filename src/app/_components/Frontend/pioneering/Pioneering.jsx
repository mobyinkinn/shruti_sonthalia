import React from "react";
import Hero from "./parts/Hero";
import ScrollTimeline from "./parts/Dashed";
import Leftside from "./parts/Leftside";
import Rightside from "./parts/Rightside";
import Contact_us from "../about/parts/Contact_us";
import git from "../publications/assets/git.png";

const Pioneering = () => {
  return (
    <div className="bg-[#FCFCFF]">
      <Hero />
      <h1 className="text-[2.5rem] text-[#E53935] font-medium text-center">
        SHRUTI SONTHALIA
      </h1>
      <p className="text-[#151583] text-[1.5rem] mt-1 mb-6 text-center">
        A Two-Decade Journey in Coaching, Advocacy, and Social Impact
      </p>
      <div className="flex flex-row justify-between">
        <Leftside />
        <ScrollTimeline />
        <Rightside />
      </div>
      <div className="px-6">
        <Contact_us
          heading="Take the First Step Toward Successful Change"
          line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into  a competitive advantage?"
          line2="Sign up for Our Change Management Programs Now"
          button_Name="Get In Touch"
          bg_image={git}
        />
      </div>
    </div>
  );
};

export default Pioneering;
