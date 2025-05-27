// import React from "react";

// const coachingData = [
//   {
//     heading: "Support and Resilience",
//     item: "Manage emotional demands and maintain your well-being.",
//   },
//   {
//     heading: "Enhanced Self-Awareness",
//     item: "Identify biases, blind spots, and personal influences on your coaching approach.",
//   },
//   {
//     heading: "Ethical guidance",
//     item: "Navigate complex client situations with professional integrity.",
//   },
//   {
//     heading: "Expanded Skill Set",
//     item: "Explore alternative coaching interventions and approaches.",
//   },
// ];

// const Coaching = () => {
//   return (
//     <div className="flex flex-col  mt-12">
//       <div className="flex flex-col justify-center items-center text-center">
//         <span className="text-2xl md:text-3xl font-normal text-[#E53935] mb-4 underline-offset-4">
//           Why Coaching Supervison Matters?
//         </span>
//       </div>

//       <div className="w-[80%] mx-auto flex flex-wrap gap-8 justify-center items-center mt-8 ">
//         {coachingData.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-[20px] p-6 w-[450px] cursor-pointer min-h-[8rem] text-center hover:bg-[#E53935] hover:text-[#fff]"
//           >
//             <div className="text-[1.4rem] font-medium leading-snug">
//               {item.heading}
//             </div>
//             <span className="text-[1rem] leading-snug">{item.item}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Coaching;


import React from "react";

const coachingData = [
  {
    heading: "Enhanced self-awareness",
    item: "Identify biases, blind spots, and personal influences on your coaching approach.",
  },
  {
    heading: "Ethical guidance",
    item: "Navigate complex client situations with professional integrity.",
  },
  {
    heading: "Expanded skill set",
    item: "Explore alternative coaching interventions and approaches.",
  },
  {
    heading: "Support and resilience",
    item: "Manage emotional demands and maintain your well-being.",
  },
];

const Coaching = () => {
  return (
    <div className="flex flex-col md:mt-12 mt-0 items-center px-4 sm:px-6">
      {/* Header Section */}
      <div className="text-center max-w-4xl">
        <span className="text-xl sm:text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          Why Coaching Supervision Matters ?
        </span>

        <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-6 leading-relaxed">
          Coaching is an enriching yet demanding profession. Without a
          reflective space to discuss complex client interactions, ethical
          dilemmas, and personal challenges, coaches risk burnout and
          stagnation. Supervision provides:
        </p>
      </div>

      {/* Card Grid */}
      <div className="w-full sm:w-[90%] mx-auto flex flex-wrap gap-6 justify-center items-center mt-10">
        {coachingData.map((item, index) => {
          const percentageMatch = item.item.match(/(\d+%)\s/);
          const percentage = percentageMatch ? percentageMatch[1] : "";
          const updatedItem = item.item.replace(
            percentage,
            `<strong>${percentage}</strong>`
          );

          return (
            <div
              key={index}
              className="bg-white border border-[lightgrey] rounded-[20px] p-5 sm:p-6 w-full sm:w-[450px] text-center hover:bg-[#E53935] hover:text-white transition-colors"
              dangerouslySetInnerHTML={{ __html: updatedItem }}
            />
          );
        })}
      </div>

      {/* Highlight Block */}
      <div className="bg-[#E53935] text-white flex mt-10 rounded-[20px] p-5 sm:p-6 w-full sm:w-[90%]">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
          Our 2-day coach skills program transforms the leadership styles of
          organisations. It helps them in fostering a coaching mindset. It also
          enables them to transition from a top-down approach of decision-making
          to one that is aimed at sharing knowledge and enabling teams to
          achieve their goals. Unlike conventional coaching programs that focus
          on technique alone, our method rewires leadership behaviors from the
          inside out.
        </p>
      </div>

      {/* Closing Statement */}
      <span className="text-xl sm:text-2xl md:text-3xl max-w-4xl mt-10 leading-snug tracking-wide font-medium text-center text-[#151583] px-2">
        We don’t just teach coaching skills, we help you embody a coaching
        mindset.
      </span>
    </div>
  );
};

export default Coaching;
