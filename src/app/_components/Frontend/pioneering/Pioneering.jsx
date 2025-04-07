import React from 'react'
import Hero from './parts/Hero'
import ScrollTimeline from './parts/Dashed';
import Leftside from './parts/Leftside';
import Rightside from './parts/Rightside';
import Contact_us from '../about/parts/Contact_us';

const Pioneering = () => {
  return (
    <div className="px-14 py-10 bg-[#FCFCFF]">
      <Hero />
      <div className="flex flex-row justify-between">
        <Leftside />
        <ScrollTimeline />
        <Rightside />
      </div>
      <Contact_us
        heading="Take the First Step Toward Successful Change"
        line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into  a competitive advantage?"
        line2="Sign up for Our Change Management Programs Now"
        button_Name="Get In Touch"
      />
    </div>
  );
}

export default Pioneering
