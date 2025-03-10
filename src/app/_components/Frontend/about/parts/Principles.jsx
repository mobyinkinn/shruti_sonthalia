import React from "react";

const Principles = () => {
  return (
    <div className="flex flex-col mt-12 space-y-6">
      <div className="flex flex-col  justify-center items-center space-y-6">
        <span className="text-[1.4rem] leading-none">Lessons I Live By</span>
        <span className="text-[2.5rem] leading-none font-semibold uppercase">
          Principles That Guide My Journey
        </span>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="w-[32%] flex flex-col space-y-4">
          <span className="text-[1.4rem] leading-none">01</span>
          <span className="text-[1.4rem] leading-none font-semibold">
            Coaching as a discipline
          </span>
          <span className="text-[1.4rem] leading-none">
            An art as well as a science, coaching demands rigour and dedication
            in both aspects. My practice integrates proven approaches with
            intuitive creative enquiry - to reveal pain-points and embed lasting
            change.
          </span>
        </div>
        <div className="w-[32%] flex flex-col space-y-4">
          <span className="text-[1.4rem] leading-none">02</span>
          <span className="text-[1.4rem] leading-none font-semibold">
            Pragmatic Transformation
          </span>
          <span className="text-[1.4rem] leading-none">
            Coaching isn’t energy healing or esoteric practices, but
            evidence-based methods that clients can grasp, to elevate
            performance and add tangible value.
          </span>
        </div>
        <div className="w-[32%] flex flex-col space-y-4">
          <span className="text-[1.4rem] leading-none">03</span>
          <span className="text-[1.4rem] leading-none font-semibold">
            Pragmatic Transformation
          </span>
          <span className="text-[1.4rem] leading-none">
            The coaching relationship is a protected space where clients soften
            certain protective boundaries in order to grow. This courageous act
            requires a container of total respect.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Principles;
