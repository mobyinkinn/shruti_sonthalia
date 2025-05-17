// import React from "react";

// const data = [
//   {
//     title: "Cultural Assessments",
//     item: "We map the current culture — its strengths, cracks, and untapped potential",
//   },
//   {
//     title: "Tailored to You",
//     item: "No off-the-shelf playbooks. Our solutions grow from your story, your  people, and your strategic context",
//   },
//   {
//     title: "Leadership Alignment",
//     item: "We equip leaders to model and reinforce desired cultural traits  consistently",
//   },
//   {
//     title: "Cultural Led by Practitioners",
//     item: "Our team brings decades of experience across industries,  blending behavioural science with business impact",
//   },
//   {
//     title: "Built to Last",
//     item: "We design sustainable frameworks that evolve with you — long after our  work is done",
//   },
// ];

// const Ruhco = () => {
//   return (
//     <div className="bg-[#151583] text-white flex flex-col justify-center items-center text-center p-6 mt-20">
//       <div className="flex flex-col">
//         <span className="text-3xl w-[80%] text-[white] tracking-wider font-medium">
//           Why RuhCo?
//         </span>
//         <span className="text-[1.1rem]">
//           We don’t do cookie-cutter culture work. We co-create living cultures:
//         </span>
//       </div>
//       <div className="w-full flex space-x-4 mt-6">
//         {data.map((d, i) => {
//           return (
//             <div
//               key={i}
//               className="w-[20%] bg-white flex flex-col p-4 rounded-[20px] space-y-6"
//             >
//               <span className="text-[#151583] font-medium text-[1.8rem]">
//                 {d.title}
//               </span>
//               <span className="text-black text-[1rem]">{d.item}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Ruhco;
import React from "react";

const data = [
  {
    title: "Cultural Assessments",
    item: "We map the current culture — its strengths, cracks, and untapped potential",
  },
  {
    title: "Tailored to You",
    item: "No off-the-shelf playbooks. Our solutions grow from your story, your  people, and your strategic context",
  },
  {
    title: "Leadership Alignment",
    item: "We equip leaders to model and reinforce desired cultural traits  consistently",
  },
  {
    title: "Cultural Led by Practitioners",
    item: "Our team brings decades of experience across industries,  blending behavioural science with business impact",
  },
  {
    title: "Built to Last",
    item: "We design sustainable frameworks that evolve with you — long after our  work is done",
  },
];

const Ruhco = () => {
  return (
    <div className="bg-[#151583] text-white flex flex-col justify-center items-center text-center p-6 mt-20">
      <div className="flex flex-col">
        <span className="text-3xl w-[80%] mx-auto text-white tracking-wider font-medium">
          Why RuhCo?
        </span>
        <span className="text-[1.1rem] mt-2 max-w-md mx-auto">
          We don’t do cookie-cutter culture work. We co-create living cultures:
        </span>
      </div>

      {/* Cards container */}
      <div
        className="
          w-full 
          flex flex-col space-y-6 mt-6 
          md:flex-row md:space-y-0 md:space-x-4 md:justify-center md:px-4
        "
      >
        {data.map((d, i) => (
          <div
            key={i}
            className="
              w-full 
              md:w-[20%] 
              bg-white 
              flex flex-col 
              p-4 rounded-[20px] 
              space-y-4
              text-left
              shadow-md
              "
          >
            <span className="text-[#151583] font-medium text-[1.5rem] md:text-[1.8rem]">
              {d.title}
            </span>
            <span className="text-black text-[1rem]">{d.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ruhco;
