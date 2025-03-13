import React from "react";
import approach from "../assets/approach/approach.png";
import circle from "../assets/approach/circle.gif";
import img1 from "../assets/approach/img1.png";
import img2 from "../assets/approach/img2.png";
import img3 from "../assets/approach/img3.png";
import img4 from "../assets/approach/img4.png";

const Approach = () => {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <span className="text-[1.4rem] leading-none ">Our Approach</span>
        <span className="text-[2.5rem] leading-none tracking-wider font-medium uppercase">
          What You Can Expect?
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider">
          We offer individual and group supervision tailored to your needs. Our
          experienced supervisors create a non-judgmental, supportive
          environment where you can explore real client cases, receive
          constructive feedback, and develop advanced coaching techniques.
        </span>
      </div>
      {/**Mid sec */}
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <div className="flex flex-row justify-between mt-12 items-center">
          <div className="flex flex-col w-[24%]  space-y-8">
            <div>
              <div
                className="hidden md:flex w-[80px] h-[80px]  bg-cover bg-center"
                style={{ backgroundImage: `url(${img1.src})` }}
              ></div>
              <span className="text-[1.2rem] leading-7 tracking-widest text-end">
                Confidential and supportive discussions that encourage deep
                reflection.
              </span>
            </div>
            <div>
              <div
                className="hidden md:flex w-[80px] h-[80px]  bg-cover bg-center"
                style={{ backgroundImage: `url(${img3.src})` }}
              ></div>
              <span className="text-[1.2rem] leading-7 tracking-widest text-end">
                Techniques to manage emotional demands and prevent burnout.
              </span>
            </div>
          </div>

          <div className="relative w-[600px] flex items-center justify-center">
            <div
              className="absolute w-[580px] h-[600px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${circle.src})` }}
            ></div>

            <div
              className="relative z-10 w-[450px] min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[450px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${approach.src})` }}
            ></div>
          </div>

          <div className="flex flex-col w-[24%] space-y-8">
            <div>
              <div
                className="hidden md:flex w-[80px] h-[80px]  bg-cover bg-center"
                style={{ backgroundImage: `url(${img2.src})` }}
              ></div>
              <span className="text-[1.2rem] leading-7 tracking-widest text-end">
                Ethical guidance and best practices to navigate client
                challenges.
              </span>
            </div>
            <div>
              <div
                className="hidden md:flex w-[80px] h-[80px]  bg-cover bg-center"
                style={{ backgroundImage: `url(${img4.src})` }}
              ></div>
              <span className="text-[1.2rem] leading-7 tracking-widest text-end">
                New perspectives and methodologies to enrich your coaching
                approach.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/**last sec */}
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6 mt-14">
        <span className="text-[2.5rem] leading-none tracking-wide font-semibold  uppercase">
          Coaching supervision is not just a professional requirement it’s an
          opportunity to expand your potential. Investing in supervision
          enhances your effectiveness, deepens your impact, and strengthens your
          confidence as a coach.
        </span>
      </div>
    </div>
  );
};

export default Approach;
