// "use client"

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaExternalLinkAlt } from "react-icons/fa";

// // Sample icons (replace with your own icons/images if needed)
// import homeIcon from "../assets/Buying.png"; // Example icon
// import handshakeIcon from "../assets/Buying.png"; // Example icon
// import keyIcon from "../assets/Selling.png"; // Example icon
// import backgroundImage from "../assets/bg.png"; // Background image

// const interestOptions = [
//   { id: 1, label: "Buy Property", icon: homeIcon },
//   { id: 2, label: "Sell Property", icon: handshakeIcon },
//   { id: 3, label: "Rent Property", icon: keyIcon },
// ];

// const InterestSection = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="relative bg-[#1e1e1e] py-12">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={backgroundImage}
//           alt="Property"
//           fill
//           className="object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Section */}
//         <div className="text-white">
//           <h2 className="text-4xl font-bold">Got More Questions?</h2>
//           <p className="mt-2 text-lg">
//             Let’s talk about your needs and investment goals
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="bg-white/90 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4">
//           <h3 className="text-xl font-bold">I am interested to</h3>

//           {/* Icons Section */}
//           <div className="flex gap-4">
//             {interestOptions.map((option) => (
//               <button
//                 key={option.id}
//                 onClick={() => setSelected(option.id)}
//                 className={`w-14 h-14 flex items-center justify-center rounded-lg transition-all ${
//                   selected === option.id ? "bg-black text-white" : "bg-white"
//                 }`}
//               >
//                 <Image
//                   src={option.icon}
//                   alt={option.label}
//                   width={30}
//                   height={30}
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Continue Button */}
//           <button className="flex items-center gap-2 px-6 py-2 bg-white border border-black rounded-full text-black hover:bg-black hover:text-white transition">
//             Continue <FaExternalLinkAlt />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterestSection;
"use client"

import AnimatedButton from "@/app/utils/Butoon";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaHome, FaHandshake, FaKey } from "react-icons/fa";
const InterestSection = () => {
  const [selected, setSelected] = useState(null);

  const interestOptions = [
    { id: 1, label: "Buy Property", icon: <FaHome size={24} /> },
    { id: 2, label: "Sell Property", icon: <FaHandshake size={24} /> },
    { id: 3, label: "Rent Property", icon: <FaKey size={24} /> },
  ];

  return (
    <div
      className="w-[100%] bg-cover bg-center flex justify-center items-center rounded-2xl mb-16 pt-2"
      style={{
        backgroundImage: `url('/bg.png')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="w-[90%] bg-[#151583] rounded-2xl p-20 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="text-white w-[100%] items-center flex flex-col gap-4">
          <h2 className="text-[3.5rem] font-bold leading-tight">
            Get In Touch
          </h2>
          <p className="text-[1.8rem] text-center w-[80%]">
            Have questions? Ready to take your business to the next level? I’d
            love to hear from you!
          </p>
          <button className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full hover:bg-white hover:text-black border  transition">
            Continue <FaExternalLinkAlt />
          </button>
          {/* <AnimatedButton /> */}
        </div>
      </div>
    </div>
  );
};

export default InterestSection;
