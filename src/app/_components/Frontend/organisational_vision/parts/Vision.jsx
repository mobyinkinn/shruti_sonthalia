import React from "react";
import gradient from "../assets/vision/gradient.png";

const coachingData = [
  {
    item: "70% of strategies fail due to poor alignment between vision and execution (Bain, 2023). A unified vision ensures that every team works toward the same goals, eliminating inefficiencies and conflicting priorities.",
  },
  {
    item: "Leadership Alignment: 60% of leadership teams are misaligned on their company’s vision, resulting in slow decision-making and strategic drift (Korn Ferry, 2023). Our programs ensure leaders are united around a shared purpose.",
  },
  {
    item: "Market Adaptation: In industries facing disruption, 75% of companies prioritize vision alignment to stay competitive. A forward-looking vision helps organizations navigate change and seize new opportunities.",
  },
  {
    item: "70% of large-scale transformations fail due to misalignment in vision and execution (McKinsey & Company). Our program bridges the gap between vision and execution, ensuring alignment across all levels.",
  },
  {
    item: "Organizations with a clearly articulated vision are 30% more likely to outperform competitors in revenue growth (BCG). We help craft a compelling vision that drives focus, innovation, and market differentiation.",
  },
  {
    item: "60% of employees state that their company’s vision has little to no impact on their daily work. Our engagement programs ensure employees understand their role in achieving the vision, boosting motivation and productivity.",
  },
];

const Vision = () => {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-[2.5rem] leading-none tracking-wider font-medium uppercase text-[#E22E1B]">
          WHY ORGANISATIONAL VISION MATTERS?
        </span>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center mt-8 rounded-[20px]">
        {coachingData.map((item, index) => (
          <div
            key={index}
            className="relative text-white rounded-[20px] p-6 w-[436px] text-center"
            style={{
              backgroundImage: `url(${gradient.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitMaskImage: `url(${gradient.src})`,
              maskImage: `url(${gradient.src})`,
              WebkitMaskSize: "cover",
              maskSize: "cover",
            }}
          >
            <span className="text-[1.3rem] leading-snug">{item.item}</span>
          </div>
        ))}
      </div>
      <span className="text-[2rem] mt-10 leading-12 tracking-wider font-medium capitalize text-center text-[#151583]">
        A vision that’s aligned with the actions and aspirations of the
        employees and stakeholders can create wonders. Here’s why:
      </span>
    </div>
  );
};

export default Vision;
