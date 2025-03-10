import React from "react";
import Hero from "./parts/Hero";
import About_shruti from "./parts/About_shruti";
import Principles from "./parts/Principles";
import About_ruhco from "./parts/About_ruhco";

const About = () => {
  return (
    <div className="p-14">
      <Hero />
      <About_shruti />
      <Principles />
      <About_ruhco />
    </div>
  );
};

export default About;
