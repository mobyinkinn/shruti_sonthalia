import React from "react";
import Hero from "./parts/Hero";
import About_shruti from "./parts/About_shruti";
import Principles from "./parts/Principles";
import About_ruhco from "./parts/About_ruhco";
import Contact_us from "./parts/Contact_us";
import Info from "./parts/Info";

const About = () => {
  return (
    <div className="p-14">
      <Hero />
      <About_shruti />
      <Info />
      <Principles />
      <About_ruhco />
      <Contact_us
        heading="Ready to Transform Your Leadership?"
        line1="Join the growing community of leaders investing in their leadership journey."
        line2="Get in touch today to explore coaching can drive measurable impact or you and your organization."
      />
    </div>
  );
};

export default About;
