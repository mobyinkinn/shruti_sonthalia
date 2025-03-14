import React from "react";

const coachingData = [
  {
    item: "Organizations that invest in coaching report a 20% increase in business performance (Gartner, 2023).",
  },
  {
    item: "Retention rates improve by 30% in companies with strong leadership development programs (LinkedIn Workplace Learning Report, 2023)",
  },
  {
    item: "Executive coaching, when paired with training, boosts productivity by 86%, compared to just 22% with training alone",
  },
  {
    item: "Effective coaching increases team performance by 25% while reducing retention risk by 40%. (Corporate Executive Board)",
  },
  {
    item: "70% of Indian leaders need coaching to develop an agile mindset in competitive markets (BCG, 2022).",
  },
];

const Coaching = () => {
  return (
    <div className="flex flex-col  mt-12">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase">
          WHY COACHING MATTERS?
        </span>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center mt-8 ">
        {coachingData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-[20px] p-6 w-[400px] text-center"
          >
            <span className="text-[1.4rem] leading-snug">{item.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaching;
