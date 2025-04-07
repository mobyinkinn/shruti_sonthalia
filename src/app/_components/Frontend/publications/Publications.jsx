import React from "react";
import Hero from "./parts/Hero.jsx";
import Publication from "./parts/Publication.jsx";
import Contact_us from "../about/parts/Contact_us";
import RotatingImage from "@/app/utils/Rotating.jsx";

const Publications = () => {
  return (
    <div className="bg-[#FCFCFF]">
      <Hero />
      <Publication />
      <Contact_us
        heading="Take the First Step Toward Successful Change"
        line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into  a competitive advantage?"
        line2="Sign up for Our Change Management Programs Now"
        button_Name="Get In Touch"
      />
      <RotatingImage/>
    </div>
  );
};

export default Publications;
