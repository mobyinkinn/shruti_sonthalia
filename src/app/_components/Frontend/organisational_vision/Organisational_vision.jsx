import React from "react";
import Hero from "./parts/Hero.jsx";
import Contact_us from "../about/parts/Contact_us";
import Workshop from "./parts/Workshop.jsx";
import Vision from "./parts/Vision.jsx";
import LeadershipProwess from "./parts/ImagewithContent.jsx";
import Benifit from "./parts/Benifit.jsx";
import ExecutiveCoaching from "./parts/Executive.jsx";
import WhyWeStandApart from "./parts/Stand.jsx";
import HowWillThisHelp from "./parts/Willhelp.jsx";
import CaseStudy from "./parts/CaseStudy.jsx";

const Oraganisational_vision = () => {
  return (
    <>
      <Hero />
      <div className="p-10 bg-[#FCFCFF]">
        <Workshop />
        <Vision />
        <LeadershipProwess />
        <Benifit />
        <WhyWeStandApart />
        <ExecutiveCoaching />
        <HowWillThisHelp />
        <CaseStudy />
        <Contact_us
          heading="Get in Touch Now!"
          line1="Don’t let misalignment cost your organization growth and profitability. Join leading  companies that have transformed their vision into execution. Get started today!"
          button_Name="Get In Touch"
        />
      </div>
    </>
  );
};

export default Oraganisational_vision;
