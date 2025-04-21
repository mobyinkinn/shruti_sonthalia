import React from 'react'
import Hero from './parts/Hero';
import Workshop from './parts/Workshop';
import WorkshopBenefits from './parts/BenifitWorkshop';
import WhyStandApart from './parts/CardLayout';
import WorkshopOutcome from './parts/Outcome';
import ExecutiveCoaching from './parts/Executive';
import Sliders from './parts/Slider';
import Contact_us from '../about/parts/Contact_us';

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
          heading="Take the First Step Toward Successful Change"
          line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into  a competitive advantage?"
          line2="Sign up for Our Change Management Programs Now"
          button_Name="Get In Touch"
        />
      </div>
    </>
  );
}

export default Change;
