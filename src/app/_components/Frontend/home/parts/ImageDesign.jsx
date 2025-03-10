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


import { useState } from "react";
import { motion } from "framer-motion";

const HoverEffectText = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const textItems = [
    "Prioritising Your Time",
    "Building Self-Confidence",
    "Overcoming Procrastination",
    "Overcoming the Fear of Failure",
    "Maintaining Focus, Direction & Motivation",
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div
        className="relative w-[95%] h-[631px] bg-cover bg-right flex justify-end items-start rounded-[20px] pt-6  "
        style={{ backgroundImage: `url('/tempBanner.png')` }}
      >
        {/* Text Content Section */}
        <div className="bg-white bg-opacity-50 p-6 rounded-[20px] w-[38%] text-end leading-10">
          {textItems.map((item, index) => (
            <motion.p
              key={index}
              className={`text-black text-[1.5rem] font-semibold transition-all duration-300 cursor-pointer mb-2 ${
                hoveredIndex === index ? "text-[#D24324]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverEffectText;
