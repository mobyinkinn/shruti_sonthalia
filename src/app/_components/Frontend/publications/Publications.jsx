import React from "react";
import Hero from "./parts/Hero.jsx";
import Publication from "./parts/Publication.jsx";
import Contact_us from "../about/parts/Contact_us";
import git from "./assets/git.png";
import RotatingImage from "@/app/utils/Rotating.jsx";

const Publications = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover"
      style={{
        background:
          "linear-gradient(179.91deg, rgba(21, 21, 131, 0.25) 10.95%, rgba(226, 46, 27, 0.25) 99.91%), linear-gradient(0deg, #FCFCFF, #FCFCFF)",
      }}
    >
      <Hero />
      <div className="p-12">
        <Publication />
        <Contact_us
          heading="Take the First Step Toward Successful Change"
          line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into a competitive advantage?"
          line2="Sign up for Our Change Management Programs Now"
          button_Name="Get In Touch"
          bg_image={git}
        />
        {/* <RotatingImage /> */}
      </div>
    </div>
  );
};

export default Publications;
