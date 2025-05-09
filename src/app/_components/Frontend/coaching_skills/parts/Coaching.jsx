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
    <div className="flex flex-col mt-12 items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          Why Coaching Skills Matters?
        </span>

        <span className="w-[85%] text-[1.2rem] py-10 text-gray-800 text-base leading-relaxed md:text-xl">
          Studies have proved that cultivating coaching skills shift the
          leaders’ comprehension of power and leadership. Additionally,
          coach-trained leaders avoid instructing or solving problems and start
          facilitating their teams to achieve their goals. They also perceive
          their employees as independent and whole.
        </span>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap gap-8 justify-center items-center mt-8 ">
        {coachingData.map((item, index) => {
          // Extract the percentage from the string
          const percentageMatch = item.item.match(/(\d+%)\s/);
          const percentage = percentageMatch ? percentageMatch[1] : "";

          // Replace the percentage with a bolded version
          const updatedItem = item.item.replace(
            percentage,
            `<strong>${percentage}</strong>`
          );

          return (
            <div
              key={index}
              className="bg-white border border-[lightgrey] rounded-[20px] p-6 w-[450px] min-h-[8rem] text-center hover:bg-[#E53935] hover:text-[#fff]"
              dangerouslySetInnerHTML={{ __html: updatedItem }}
            />
          );
        })}
      </div>

      <div className="bg-[#E53935] text-white flex mt-10 rounded-[20px] p-6 w-[70%] min-h-[8rem] text-center hover:bg-[white] hover:text-[white]">
        <div className="text-gray-800 text-base leading-relaxed  md:text-xl max-w-4xl my-3">
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
