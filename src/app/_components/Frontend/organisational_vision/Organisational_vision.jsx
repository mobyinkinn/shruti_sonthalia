import React from "react";
import Hero from "./parts/Hero.jsx";
import Contact_us from "../about/parts/Contact_us";
import Workshop from "./parts/Workshop.jsx";
import Vision from "./parts/Vision.jsx";

const Oraganisational_vision = () => {
  return (
    <div className="p-14 bg-[#FCFCFF]">
      <Hero />
      <Workshop />
      <Vision />
      <Contact_us
        heading="Get in Touch Now!"
        line1="Don’t let misalignment cost your organization growth and profitability. Join leading  companies that have transformed their vision into execution. Get started today!"
        button_Name="Get In Touch"
      />
    </div>
  );
};

export default Oraganisational_vision;
