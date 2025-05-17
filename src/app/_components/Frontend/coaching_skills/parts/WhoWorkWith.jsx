


import Image from "next/image";
import one from "../assets/program/1.jpg";
import two from "../assets/program/2.jpg";

export default function WhoWeWorkWith() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          Who is this Program for?
        </h2>
        <span className="text-[1rem] leading-7 tracking-widest">
          This program is designed for senior leaders across industries. Some
          professionals who can leverage the programme are:
        </span>
        <div className="space-y-4 mt-5">
          {[
            {
              title: "C-Suite Executives",
              description:
                "Facing high-stakes decision-making and organizational challenges.",
            },
            {
              title: "Managers And Team Leaders",
              description:
                "Looking to enhance strategic alignment and communication.",
            },
            {
              title: "Aspiring Coaches",
              description:
                "Seeking to balance legacy with innovation and ensure long-term stability.",
            },
            {
              title: "Leaders Transitioning To New Roles",
              description:
                "Aiming to expand their influence, innovate, and create a lasting impact in their industries.",
            },
            {
              title: "HR And L&D Professionals",
              description:
                "Aiming to expand their influence, innovate, and create a lasting impact in their industries.",
            },
            // {
            //   title: "HR And L&D Professionals",
            //   description: "ō  Start-up Founders And Small Business Owners",
            // },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold">
                  {" "}
                  <span className="text-[#151583] text-[1.3rem] pr-2">
                    ō
                  </span>{" "}
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
       <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 relative">
                 <div className="relative w-full max-w-lg">
                   <div className="absolute bg-[#151583] opacity-40 rounded-full md:w-60 md:h-60 w-45 h-45 bottom-8 md:right-30 right-18 z-111 animate-pulse"></div>
      
                   <div className="relative z-10 flex space-x-4">
                     <div className="w-1/2 float-animation">
                       <Image
                        src={one}
                        width={300}
                        height={300}
                        alt="Leadership Team"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="w-1/2 float-animation-reverse">
                      <Image
                        src={two}
                        width={300}
                        height={300}
                        alt="Executive Leader"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
    </section>
  );
}

