import React from "react";

const coachingData = [
  {
    item: "70% of strategies fail due to poor alignment between vision and execution (Bain, 2023). A unified vision ensures that every team works toward the same goals, eliminating inefficiencies and conflicting priorities.",
    bgClass: "bg-gradient-to-r from-[#2d2f7a] to-[#393775]",
  },
  {
    item: "Leadership Alignment: 60% of leadership teams are misaligned on their company’s vision, resulting in slow decision-making and strategic drift (Korn Ferry, 2023). Our programs ensure leaders are united around a shared purpose.",
    bgClass: "bg-gradient-to-r from-[#463f73] to-[#9e474e]",
  },
  {
    item: "Market Adaptation: In industries facing disruption, 75% of companies prioritize vision alignment to stay competitive. A forward-looking vision helps organizations navigate change and seize new opportunities.",
    bgClass: "bg-gradient-to-r from-[#b04541] to-[#ba3e32]",
  },
  {
    item: "70% of large-scale transformations fail due to misalignment in vision and execution (McKinsey & Company). Our program bridges the gap between vision and execution, ensuring alignment across all levels.",
    bgClass: "bg-gradient-to-r from-[#2d2f7a] to-[#393775]",
  },
  {
    item: "Organizations with a clearly articulated vision are 30% more likely to outperform competitors in revenue growth (BCG). We help craft a compelling vision that drives focus, innovation, and market differentiation.",
    bgClass: "bg-gradient-to-r from-[#463f73] to-[#9e474e]",
  },
  {
    item: "60% of employees state that their company’s vision has little to no impact on their daily work. Our engagement programs ensure employees understand their role in achieving the vision, boosting motivation and productivity.",
    bgClass: "bg-gradient-to-r from-[#b04541] to-[#ba3e32]",
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

      <div className="flex flex-wrap gap-8 justify-center items-center mt-8 ">
        {coachingData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-[20px] p-6 w-[400px] text-center hover:bg-[#F3834C] hover:text-[#fff]"
          >
            <span className="text-[1rem] leading-snug">{item.item}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Vision;
