import React from "react";
import Hero from "./parts/Hero";
import About_shruti from "./parts/About_shruti";
import Principles from "./parts/Principles";

const About = () => {
  return (
    <div className="p-14">
      <Hero />
      <About_shruti />
      <Principles />
    </div>
  );
};

export default About;
