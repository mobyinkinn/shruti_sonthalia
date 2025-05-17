

"use client";
import Image from "next/image";
import Mask from "../assets/Maskbg.png";
import { useRef } from "react";
import Mask1 from "../assets/slider/1.jpg";
import Mask2 from "../assets/slider/2.jpg";
import Mask3 from "../assets/slider/3.jpg";
import Mask4 from "../assets/slider/4.jpg";
import Mask5 from "../assets/slider/5.jpg";
import Mask6 from "../assets/slider/6.jpg";
import Mask7 from "../assets/slider/7.jpg";
import Mask12 from "../assets/slider/12.jpg";

import Slider from "react-slick";

const Sliders = () => {
  const desktopSliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cardContent = [
    {
      title: "Employee Resistance:",
      description:
        "65% of employees resist change due to fear of the unknown or lack of communication (Deloitte, 2023). We help you build trust and transparency.",
      img: Mask12,
    },
    {
      title: "Leadership Gaps:",
      description:
        "Only 25% of leaders feel confident leading change initiatives (Korn Ferry, 2022). We equip your leaders with the tools and mindset to drive transformation.",
      img: Mask1,
    },
    {
      title: "Change Fatigue:",
      description:
        "45% of employees report feeling overwhelmed by constant changes (Gartner, 2023). Our program ensures sustainable pacing and employee well-being.",
      img: Mask2,
    },
    {
      title: "Ineffective Communication:",
      description:
        "Poor communication is the #1 reason change initiatives fail (Prosci, 2023). We design clear, consistent communication plans to keep everyone aligned.",
      img: Mask3,
    },
    {
      title: "Lack of Measurable Outcomes:",
      description:
        "60% of organizations struggle to track the success of change initiatives (BCG, 2023). Our data-driven approach ensures you can measure progress and ROI.",
      img: Mask4,
    },
    {
      title: "Evolving work models: ",
      description:
        "Hybrid and remote work models have made change management essential for organisations. We provide tailored strategies to manage distributed teams, foster collaboration, and maintain productivity in hybrid and remote environments.",
      img: Mask5,
    },
    {
      title: "Unexpected market fluctuations:",
      description:
        "Sudden market changes caused by geopolitical events have made change management crucial. We help organizations build resilience and agility, enabling them to adapt quickly to external disruptions and maintain business continuity.",
      img: Mask6,
    },
    {
      title: "Acquisitions and mergers:",
      description:
        "Structural changes can overwhelm employees and leaders alike during mergers and acquisitions and need effective change management. We provide solutions that integrate cultures, align leadership, and ensure smooth transitions, minimizing disruption and maximizing value creation.",
      img: Mask7,
    },
  ];

  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center md:h-screen h-[53vh]"
        style={{ backgroundImage: `url(${Mask.src})` }}
      >
        {/* Desktop View: Text + Slider side by side */}
        <div className="z-20 hidden md:flex flex-row px-10 justify-center items-center text-left h-full gap-10">
          <div className="w-[40%]">
            <h1 className="text-white text-left font-medium mb-4 tracking-wider w-full">
              ō Why Navigating Change Matters
            </h1>
            <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider w-full">
              The Challenge We Solve?
            </h1>
            <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Book A Consult
            </button>
          </div>
          <div className="bg-white w-[60%] h-[70%] rounded-2xl relative">
            <Slider
              ref={desktopSliderRef}
              {...desktopSettings}
              className="h-full"
            >
              {cardContent.map((card, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl text-white h-full flex"
                >
                  <div className="flex flex-row justify-between w-full">
                    <div className="w-[50%] flex flex-col justify-center">
                      <h2 className="text-3xl font-semibold text-[#E53935] mb-4">
                        {card.title}
                      </h2>
                      <p className="text-black">{card.description}</p>
                    </div>
                    <div className="w-[35%] h-[40%]">
                      <Image
                        src={card.img}
                        alt="Workshop Image"
                        layout="responsive"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Mobile View: Only Text + Button */}
        <div className="z-20 flex flex-col md:hidden px-6 py-10 text-center text-white space-y-8">
          <h1 className="text-left font-medium tracking-wider text-2xl">
            ō Why Navigating Change Matters
          </h1>
          <h1 className="text-left font-semibold text-3xl tracking-wider">
            The Challenge We Solve?
          </h1>
          <button className="self-start bg-[#151583] px-6 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer text-lg">
            Book A Consult
          </button>
        </div>

        {/* Mobile Slider (separate) hidden on desktop */}
      </div>
      <div className="z-20 md:hidden pb-10 bg-white rounded-2xl my-5">
        <Slider ref={mobileSliderRef} {...mobileSettings} className="h-full">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-xl text-black h-full flex flex-col"
            >
              <div className="flex flex-col justify-between w-full">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-[#E53935] mb-2">
                    {card.title}
                  </h2>
                  <p>{card.description}</p>
                </div>
                <div className="w-full h-[180px]">
                  <Image
                    src={card.img}
                    alt="Workshop Image"
                    layout="responsive"
                    className="rounded-lg shadow-lg"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
