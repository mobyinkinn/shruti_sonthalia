// import React from "react";

// const coachingData = [
//   {
//     item: "Organizations that invest in coaching report a <strong>20%</strong> increase in business performance (Gartner, 2023).",
//   },
//   {
//     item: "Retention rates improve by <strong>30%</strong> in companies with strong leadership development programs (LinkedIn Workplace Learning Report, 2023)",
//   },
//   {
//     item: "Executive coaching, when paired with training, boosts productivity by <strong>86%</strong>, compared to just <strong>22%</strong> with training alone  - (Personnel Management Association)",
//   },
//   {
//     item: "Effective coaching increases team performance by <strong>25%</strong> while reducing retention risk by <strong>40%</strong>. (Corporate Executive Board)",
//   },
//   {
//     item: "70% of Indian leaders need coaching to develop an agile mindset in competitive markets (BCG, 2022).",
//   },
// ];

// const Coaching = () => {
//   return (
//     <div className="flex flex-col mt-12">
//       <div className="flex flex-col justify-center items-center text-center">
//         <span className="text-2xl md:text-3xl font-normal text-[#E53935] capitalize leading-none tracking-wider">
//           Why Coaching Matters?
//         </span>
//       </div>

//       <div className="flex flex-wrap gap-8 justify-center items-center mt-8">
//         {coachingData.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-[20px] p-6 w-[400px] text-center hover:bg-[#E53935] hover:text-[#fff] h-[150px]"
//           >
//             <span
//               className="text-[1.1rem] leading-snug"
//               dangerouslySetInnerHTML={{ __html: item.item }}
//             ></span>
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
    item: "Organizations that invest in coaching report a <strong>20%</strong> increase in business performance (Gartner, 2023).",
  },
  {
    item: "Retention rates improve by <strong>30%</strong> in companies with strong leadership development programs (LinkedIn Workplace Learning Report, 2023)",
  },
  {
    item: "Executive coaching, when paired with training, boosts productivity by <strong>86%</strong>, compared to just <strong>22%</strong> with training alone  - (Personnel Management Association)",
  },
  {
    item: "Effective coaching increases team performance by <strong>25%</strong> while reducing retention risk by <strong>40%</strong>. (Corporate Executive Board)",
  },
  {
    item: "70% of Indian leaders need coaching to develop an agile mindset in competitive markets (BCG, 2022).",
  },
];

const Coaching = () => {
  return (
    <div className="flex flex-col md:mt-12 px-4 sm:px-8">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-xl sm:text-2xl md:text-3xl font-normal text-[#E53935] capitalize leading-tight tracking-wide">
          Why Coaching Matters?
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 sm:gap-8 justify-center items-center mt-8">
        {coachingData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-[20px] p-5 sm:p-6 w-full sm:w-[400px] text-center hover:bg-[#E53935] hover:text-white min-h-[160px] transition-all duration-300"
          >
            <span
              className="text-sm sm:text-base leading-snug"
              dangerouslySetInnerHTML={{ __html: item.item }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaching;
