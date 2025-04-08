import React from "react";
import Hero from "./parts/Hero";
import Contact_us from "../about/parts/Contact_us";
import Importance from "./parts/Importance";
import Why from "./parts/Why";
import Sliders from "./parts/Sliders";
import Who from "./parts/Who";
import Banner from "./parts/Banner";
// import git from "./assets/git.png";

const Organsiational_culture = () => {
  return (
    <div>
      <Hero />
      <div className="px-16">
        <Importance />
        <Banner />
        <Why />
        <Sliders />
        <Who />
        <Contact_us
          heading="Take the First Step Toward Successful Change"
          line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into a competitive advantage?"
          line2="Sign up for Our Change Management Programs Now"
          button_Name="Get In Touch"
          //   bg_image={git}
        />
      </div>
    </div>
  );
};

export default Organsiational_culture;
