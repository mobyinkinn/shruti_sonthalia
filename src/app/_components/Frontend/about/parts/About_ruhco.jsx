import React from "react";
// import ring from "../assets/about_ruhco/ring.gif";

const About_ruhco = () => {
  return (
    <div className="flex flex-col mt-12 space-y-6">
      <div className="flex flex-col  justify-center items-center space-y-6">
        <span className="text-[1.4rem] leading-none">About Ruhco</span>
        <span className="text-[2.5rem] leading-none font-semibold uppercase">
          connecting the Ruh - Soul and Co
        </span>
      </div>
      <div className="flex flex-col space-y-6">
        <span className="text-[1.4rem] leading-none">
          Ruh expresses spirit, essence, source. Honouring the life force that
          is abundant and wise.
        </span>
        <span className="text-[1.4rem] leading-none">
          Co. invokes a company, yours and ours. The material container in which
          we create and act. It speaks of connection and cocreation, the
          relational fabric of our existence.
        </span>
        <div className="flex">
          <div className="w-[65%] flex flex-col space-y-6">
            <span className="text-[1.4rem] leading-none">
              RuhCo. encapsulates the core of our mission. The alignment of
              infinite source and grounded action in a powerful, purposeful
              force for good.
            </span>
            <span className="text-[1.4rem] leading-none">
              Ruk<b>ō </b> [Hindi]: ‘halt’
            </span>
            <span className="text-[1.4rem] leading-none">
              The sacred pause is the seed of all transformation. When we stop
              and rest unapologetically into being, a quantum shift is possible
              – opening the door to new paradigms in leadership.
            </span>
          </div>

          <div className="w-[25%] -top-5 relative">
            {/* <div
              className=" h-80 bg-cover"
              style={{
                backgroundImage: `url(${ring.src})`,
                backgroundPosition: "top center",
              }}
            ></div> */}
            <video
              width="100%"
              autoPlay
              loop
              muted
              controls={false}
              style={{ objectFit: "cover" }}
            >
              <source src="/ring.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_ruhco;
