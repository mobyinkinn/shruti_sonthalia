import React from 'react'
import hero from "../assets/hero/hero.png";

const Leads = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-[45%] space-y-8 justify-start">
          <span className="text-[2.5rem] font-medium uppercase leading-12">
            Why Choose Our Coaching Skills Program?
          </span>
        </div>
        <div className=" w-[48%]">
          <span className="text-[1.2rem] leading-7 tracking-widest">
            In today’s fast-changing business landscape, leaders who embrace
            coaching skills unlock deeper team engagement, higher performance,
            and sustainable success. Our Coaching Skills Program isn’t just
            another leadership course—it is a results-driven program designed to
            enhance how leaders communicate, inspire, and empower their teams,
            with measurable improvements in engagement, performance, and
            collaboration.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Leads