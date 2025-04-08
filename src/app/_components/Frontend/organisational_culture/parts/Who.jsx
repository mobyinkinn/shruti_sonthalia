import React from "react";

const coachingData = [
  {
    heading: "C-Suite Leaders & Founders",
    item: "Driving strategic alignment and transformation",
  },
  {
    heading: "HR & Change Agents",
    item: "Leading people and culture initiatives",
  },
  {
    heading: "Digital & Tech Teams",
    item: "Leading people and culture initiatives",
  },
  {
    heading: "Organisations in Transition",
    item: "Navigating M&A, restructuring, or rapid scaling",
  },
  {
    heading: "Startups & Small Businesses",
    item: "Laying strong cultural foundations from day one",
  },
];

const Who = () => {
  return (
    <div className="flex flex-col  mt-12">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-[2.5rem] leading-none tracking-wider font-medium uppercase text-[#E22E1B]">
          Who We Work With?
        </span>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center mt-8 ">
        {coachingData.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col bg-white border border-gray-200 rounded-[20px] p-6 w-[400px] text-center hover:bg-[#F3834C] hover:text-[#fff] h-[125px] space-y-4"
          >
            <span className="text-[1.2rem] font-bold leading-snug">
              {item.heading}
            </span>
            <span className="text-[1rem] leading-snug">{item.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Who;
