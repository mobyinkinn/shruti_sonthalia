import React from 'react'
import Hero from './parts/Hero';
import Workshop from './parts/Workshop';
import WorkshopBenefits from './parts/BenifitWorkshop';
import WhyStandApart from './parts/CardLayout';
import WorkshopOutcome from './parts/Outcome';
import ExecutiveCoaching from './parts/Executive';
import Sliders from './parts/Slider';

const Change = () => {
  return (
    <div className="p-14 bg-[#FCFCFF]">
      <Hero />
      <Workshop/>
      <Sliders/>
      <WorkshopBenefits/>
      <WhyStandApart/>
      <WorkshopOutcome/>
      <ExecutiveCoaching/>
    </div>
  );
}

export default Change;