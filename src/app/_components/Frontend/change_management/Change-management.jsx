import React from 'react'
import Hero from './parts/Hero';
import Workshop from './parts/Workshop';
import WorkshopBenefits from './parts/BenifitWorkshop';
import WhyStandApart from './parts/CardLayout';
import WorkshopOutcome from './parts/Outcome';
import ExecutiveCoaching from './parts/Executive';
import Sliders from './parts/Slider';
import Contact_us from '../about/parts/Contact_us';
import cont from "./assets/1.jpg"
const Change = () => {
  return (
    <>
      <Hero />
      <div className="p-14 bg-[#FCFCFF]">
        <Workshop />
        <Sliders />
        <WorkshopBenefits />
        <WhyStandApart />
        <WorkshopOutcome />
        <ExecutiveCoaching />
        <Contact_us
          heading="Be the Leader Who Drives Change."
          line1="Break through resistance. Inspire your team."
          line2="Discover how our Change Management Workshop helps you lead with clarity and confidence."
          button_Name="Get In Touch"
          bg_image={cont}
        />
      </div>
    </>
  );
}

export default Change;
