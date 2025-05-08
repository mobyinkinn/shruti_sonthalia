import React from "react";

const coachingData = [
  {
    heading: "Support and Resilience",
    item: "Manage emotional demands and maintain your well-being.",
  },
  {
    heading: "Enhanced Self-Awareness",
    item: "Identify biases, blind spots, and personal influences on your coaching approach.",
  },
  {
    heading: "Ethical guidance",
    item: "Navigate complex client situations with professional integrity.",
  },
  {
    heading: "Expanded Skill Set",
    item: "Explore alternative coaching interventions and approaches.",
  },
];

const Coaching = () => {
  return (
    <div className="flex flex-col  mt-12">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-2xl md:text-3xl font-normal text-[#E22E1B] mb-4 underline-offset-4">
          Why Coaching Supervison Matters?
        </span>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap gap-8 justify-center items-center mt-8 ">
        {coachingData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-[20px] p-6 w-[450px] cursor-pointer min-h-[8rem] text-center hover:bg-[#F3834C] hover:text-[#fff]"
          >
            <div className="text-[1.4rem] font-medium leading-snug">
              {item.heading}
            </div>
            <span className="text-[1rem] leading-snug">{item.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaching;
