import React from "react";

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
        <span className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          Why Organisational Vision Matters?
        </span>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center mt-8 ">
        {coachingData.map((item, index) => {
          // Bold the percentage in the item text
          const updatedItem = item.item.replace(
            /(\d+%)/g, // Match any number followed by %
            (match) => `<strong>${match}</strong>` // Wrap the match in <strong> tag
          );

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[20px] p-6 w-[400px] text-center hover:bg-[#E53935] hover:text-[#fff]"
            >
              <span
                className="text-[1rem] leading-snug"
                dangerouslySetInnerHTML={{ __html: updatedItem }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vision;
