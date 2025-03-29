import React from 'react'
import Hero from './parts/Hero'
import ScrollTimeline from './parts/Dashed';
import Leftside from './parts/Leftside';
import Rightside from './parts/Rightside';
import ContactSection from '../home/parts/Contact';

const Pioneering = () => {
  return (
    <div className="px-14 bg-[#FCFCFF]">
      <Hero />
      <div className='flex flex-row justify-between'> 
        <Leftside />
        <ScrollTimeline/>
        <Rightside />
      </div>
      <ContactSection/>
    </div>
  );
}

export default Pioneering