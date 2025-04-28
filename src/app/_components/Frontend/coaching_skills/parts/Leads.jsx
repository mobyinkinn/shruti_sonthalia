import React from 'react'
import hero from "../assets/hero/hero.png";

const Leads = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-row justify-evenly py-10">
        <div className="flex flex-col w-[45%] space-y-8 justify-center">
          <span className="text-[2rem] font-medium uppercase leading-12 text-[#E22E1B] text-center">
            Why Choose Our Coaching Skills Program?
          </span>
        </div>
        <div className=" w-[48%]">
          <span className="text-[1.2rem] leading-7 tracking-widest">
            We have devised a unique program driven by our deep expertise in
            coaching & organizational leadership: With 10+ years of experience
            mentoring coaches and working with organizational stakeholders, we
            understand the distinct challenges of both. Our program is uniquely
            designed to bridge leadership development with coaching excellence,
            ensuring that leaders gain practical, organization-ready coaching
            skills while driving measurable impact at both the individual and
            enterprise levels.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Leads