import React from "react";
import Hero from "./parts/Hero";
import Contact_us from "../about/parts/Contact_us";
import git from "./assets/git.png";
import Cards from "./parts/Cards";

const CaseStudies = () => {
  return (
    <div>
      <Hero />
      <Cards/>
      <div className="px-6">
        <Contact_us
          heading="Take the First Step Toward Successful Change"
          line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into a competitive advantage?"
          line2="Sign up for Our Change Management Programs Now"
          button_Name="Get In Touch"
          bg_image={git}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
