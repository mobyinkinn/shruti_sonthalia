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
import cont from "./assets/cont.jpg";
import contmob from "./assets/getin.jpg";
import org from "./assets/org.png";
import mobileorg from "./assets/mobileorg.jpg";

import OrgView from "./parts/OrgView.jsx";


const Oraganisational_vision = () => {
  return (
    <>
      <Hero />
      <div className="md:p-10 p-5 bg-[#FCFCFF]">
        <Workshop />
        <Vision />
        <LeadershipProwess />
        <Benifit />
        <WhyWeStandApart />
        <ExecutiveCoaching />
        <OrgView bg_image={org} mobile_bg={mobileorg} />
        <HowWillThisHelp />
        {/* <CaseStudy /> */}

        <Contact_us
          heading="ALIGN. ACT. ACHIEVE."
          line1="Don’t let misalignment hold your organization back. Join top-performing companies turning vision into action—and driving real results."
          button_Name="Get In Touch"
          bg_image={cont}
          mob_bg_image={contmob}
        />
      </div>
    </>
  );
};

export default Oraganisational_vision;
