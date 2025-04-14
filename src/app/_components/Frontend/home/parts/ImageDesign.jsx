"use client"
// import { useState } from "react";
// import { motion } from "framer-motion";

// const HoverEffectText = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const textItems = [
//     "Prioritising Your Time",
//     "Building Self-Confidence",
//     "Overcoming Procrastination",
//     "Overcoming the Fear of Failure",
//     "Maintaining Focus, Direction & Motivation",
//   ];

//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/tempBanner.jpg')` }}
//     >
//       <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center space-y-4">
//         {textItems.map((item, index) => (
//           <motion.p
//             key={index}
//             className={`text-white text-xl font-semibold transition-all duration-300 cursor-pointer ${
//               hoveredIndex === index ? "text-yellow-400" : ""
//             }`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {item}
//           </motion.p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HoverEffectText;


// import { useState } from "react";
// import { motion } from "framer-motion";

// const HoverEffectText = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const textItems = [
//     "Prioritising Your Time",
//     "Building Self-Confidence",
//     "Overcoming Procrastination",
//     "Overcoming the Fear of Failure",
//     "Maintaining Focus, Direction & Motivation",
//   ];

//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center flex justify-end items-center"
//       style={{ backgroundImage: `url('/tempBanner.jpg')` }}
//     >
//       {/* Text Content Section */}
//       <div className="bg-black bg-opacity-50 p-8 rounded-l-lg w-[30%]">
//         {textItems.map((item, index) => (
//           <motion.p
//             key={index}
//             className={`text-white text-lg font-semibold transition-all duration-300 cursor-pointer mb-2 ${
//               hoveredIndex === index ? "text-yellow-400" : ""
//             }`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {item}
//           </motion.p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HoverEffectText;


// import { useState } from "react";
// import { motion } from "framer-motion";

// const HoverEffectText = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const textItems = [
//     "Prioritising Your Time",
//     "Building Self-Confidence",
//     "Overcoming Procrastination",
//     "Overcoming the Fear of Failure",
//     "Maintaining Focus, Direction & Motivation",
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center pt-10">
//       <div
//         className="relative w-[95%] h-[631px] bg-cover bg-right flex justify-end items-start rounded-[20px] pt-6  "
//         style={{ backgroundImage: `url('/tempBanner.png')` }}
//       >
//         {/* Text Content Section */}
//         <div className="bg-white bg-opacity-50 p-6 rounded-[20px] w-[38%] text-end leading-10">
//           {textItems.map((item, index) => (
//             <motion.p
//               key={index}
//               className={`text-black text-[1.5rem] font-semibold transition-all duration-300 cursor-pointer mb-2 ${
//                 hoveredIndex === index ? "text-[#D24324]" : ""
//               }`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {item}
//             </motion.p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoverEffectText;


const HoverEffectText = () => {
  const textItems = [
    "Prioritising Your Time",
    "Building Self-Confidence",
    "Overcoming Procrastination",
    "Overcoming the Fear of Failure",
    "Maintaining Focus, Direction & Motivation",
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10 relative">
      <div className="py-5 flex flex-col items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] underline-offset-4 uppercase">
          Introducing Shruti Sonthalia
        </h2>
        <p className="text-[0.8rem]">
          Master Certified Coach, Trusted Advisor to C-Suite Leaders and Coaches
        </p>
      </div>
      <div
        className="relative w-[100%] h-[631px] bg-cover bg-right flex justify-end items-start  pt-6"
        style={{ backgroundImage: `url('/tempBanner.png')` }}
      >
        {/* <div className="bg-white bg-opacity-50 p-6 rounded-[20px] w-[38%] text-end leading-14">
          {textItems.map((item, index) => (
            <p
              key={index}
              className="text-black text-[1.5rem] font-semibold transition-colors duration-300 cursor-pointer hover:text-[#D24324]"
            >
              {item}
            </p>
          ))}
        </div> */}
      </div>
      <p className="absolute w-[89%] pb-4 text-white text-[1.4rem] bottom-0 text-center">
        Shruti Sonthalia, a highly accomplished Master Certified Coach
        recognized by the International Coaching Federation (ICF), conveys a
        profound depth and breadth of experience, a fervent passion for
        coaching, and exceptional coaching expertise. Her extensive journey
        encompasses the C-Suite and senior leadership in diverse sectors,
        ranging from multinational corporations and technology leaders to family
        businesses, as well as mentoring fellow coaches.
      </p>
    </div>
  );
};

export default HoverEffectText;
