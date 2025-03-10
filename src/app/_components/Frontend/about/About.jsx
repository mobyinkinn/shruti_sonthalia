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
      <Contact_us />
    </div>
  );
};

export default About;
