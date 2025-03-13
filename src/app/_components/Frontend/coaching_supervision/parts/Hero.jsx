import React from "react";
import supervision from "../assets/hero/supervision.png";

const Hero = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <span className="text-[1.4rem] leading-none ">Services</span>
        <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase">
          Coaching Supervision For <br /> Aspiring Coaches
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider">
          Enhance your coaching skills with expert guidance, constructive
          feedback, and practical insights.
          <br /> Build confidence, refine your approach, and elevate your
          coaching impact
        </span>
        <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border transition cursor-pointer">
          Book A Session
        </button>
      </div>

      <div className="mt-12">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[58%] space-y-8">
            <span className="text-[2.5rem] leading-none font-semibold uppercase">
              Unlock New Depths in Your <br /> Coaching Practice
            </span>
            <span className="text-[1.2rem] leading-7 tracking-widest">
              Coaching supervision is an essential, structured process that
              enables coaches to reflect, grow, and refine their skills. Whether
              you are an experienced coach or new to the profession, supervision
              provides a safe, confidential space to explore challenges, enhance
              self- awareness, and improve professional effectiveness.
            </span>
            <span className="text-[1.2rem] leading-7 tracking-widest">
              We offer high-quality coaching supervision designed to support
              your continuous professional development. With a focus on ethical
              practice, psychological insight, and systemic awareness, our
              supervision sessions empower you to bring greater impact to your
              clients and maintain your well-being as a coach.
            </span>
          </div>
          <div className=" w-[38%]">
            <div
              className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[480px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${supervision.src})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
