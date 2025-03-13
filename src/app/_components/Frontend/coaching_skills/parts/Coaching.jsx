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
    heading: "Enhanced Self-Awareness",
    item: "Identify biases, blind spots, and personal influences on your coaching approach.",
  },
  {
    heading: "Expanded Skill Set",
    item: "Explore alternative coaching interventions and approaches.",
  },
];

const Coaching = () => {
  return (
    <div className="flex flex-col  mt-12 items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase">
          WHY COACHING Supervison MATTERS?
        </span>

        <span className="w-[85%] text-[1.2rem] py-10">
          Studies have proved that cultivating coaching skills shift the
          leaders’ comprehension of power and leadership. Additionally,
          coach-trained leaders avoid instructing or solving problems and start
          facilitating their teams to achieve their goals. They also perceive
          their employees as independent and whole.
        </span>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap gap-8 justify-center items-center mt-8 ">
        {coachingData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-[20px] p-6 w-[450px] min-h-[8rem] text-center hover:bg-[#151583] hover:text-[#fff]"
          >
            <div className="text-[1.4rem] font-medium leading-snug py-2">
              {item.heading}
            </div>
            <span className="text-[1rem] leading-snug">{item.item}</span>
          </div>
        ))}
      </div>
      <div className="bg-white flex mt-10 shadow-lg rounded-[20px] p-6 w-[68%] min-h-[8rem] text-center hover:bg-[#151583] hover:text-[#fff]">
        <div className="text-[1rem] font-medium leading-snug py-2">
          Our 2-day coach skills program transforms the leadership styles of
          organisations. It helps them in fostering a coaching mindset. It also
          enables them to transition from a top-down approach of decision-making
          to one that is aimed at sharing knowledge and enabling teams to
          achieve their goals. Unlike conventional coaching programs that focus
          on technique alone, our method rewires leadership behaviors from the
          inside out.
        </div>
      </div>
      <span className="text-[2.5rem] w-[85%] mt-10 leading-none tracking-wider font-medium uppercase text-center">
        We don’t just teach coaching skills, we help you embody a coaching
        mindset.
      </span>
    </div>
  );
};

export default Coaching;
