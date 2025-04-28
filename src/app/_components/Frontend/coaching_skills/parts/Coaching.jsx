import React from "react";

const coachingData = [
  {
    heading: "Support and Resilience",
    item: "70% of Indian organisations require leaders to adapt to new technologies (McKinsey). Leaders that have cultivated coaching skills embrace innovation and ambiguity, they adapt to new methods of working in today’s rapidly changing work environments.",
  },
  {
    heading: "Enhanced Self-Awareness",
    item: "65% of Indian leaders lack critical skills such as emotional intelligence and strategic thinking. Coaching skills enable leaders to develop open communication and foster better team culture which ultimately leads to better results for the organisation.",
  },
  {
    heading: "Enhanced Self-Awareness",
    item: "60% of all Indian leaders suffer from stress and burnout (The Economic Times, 2023). Coaching skills help leaders delegate tasks better, create a culture of trust at work and increase employee engagement.",
  },
  {
    heading: "Expanded Skill Set",
    item: "40% of senior leaders in Indian organisations quit due to a lack of leadership development (KPMG, 2022). Coach skills address the need for active career development of senior leaders.",
  },
];

const Coaching = () => {
  return (
    <div className="flex flex-col  mt-12 items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase text-[#E22E1B]">
          WHY COACHING SKILLS MATTERS?
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
            className="bg-white border border-[lightgrey] rounded-[20px] p-6 w-[450px] min-h-[8rem] text-center hover:bg-[#F3834C] hover:text-[#fff]"
          >
            {/* <div className="text-[1.4rem] font-medium leading-snug py-2">
              {item.heading}
            </div> */}
            <span className="text-[1rem] leading-snug">{item.item}</span>
          </div>
        ))}
      </div>
      <div className="bg-white flex mt-10 rounded-[20px] p-6 w-[68%] min-h-[8rem] text-center hover:bg-[#F3834C] hover:text-[#fff]">
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
      <span className="text-[2.5rem] w-[90%] mt-10 leading-12 tracking-wider font-medium capitalize text-center text-[#151583]">
        We don’t just teach coaching skills, we help you embody a coaching
        mindset.
      </span>
    </div>
  );
};

export default Coaching;
