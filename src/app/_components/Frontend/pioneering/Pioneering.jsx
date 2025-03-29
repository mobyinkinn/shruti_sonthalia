import React from 'react'
import Hero from './parts/Hero'
import ScrollTimeline from './parts/Dashed';
import Leftside from './parts/Leftside';
import Rightside from './parts/Rightside';

const Pioneering = () => {
  return (
    <div className="px-14 bg-[#FCFCFF]">
      <Hero />
      <div className='flex flex-row justify-between'> 
        <Leftside />
        <ScrollTimeline/>
        <Rightside />
      </div>
    </div>
  );
}

export default Pioneering