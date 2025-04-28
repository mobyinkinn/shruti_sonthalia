// import React from 'react'

// const Empowering = () => {
//   return (
//     <>
//       <div className="flex justify-center pb-5 ">
//         <span className="text-black text-[2.5rem]">Empowering Solutions</span>
//       </div>
//     </>
//   );
// }

// export default Empowering
"use client";

import { useState } from "react";
import Image from "next/image";
import empowering1 from "../assets/empowing/1.jpg";
import empowering2 from "../assets/empowing/2.jpg";
import empowering3 from "../assets/empowing/3.jpg";
import { useRouter } from "next/navigation";

export default function Empowering() {
  // State to track selected option
  const [selectedOption, setSelectedOption] = useState(0);
const router = useRouter();
  // Data for the three sections
  const sections = [
    {
      title: "Organisations",
      content: `We’re here to help — let’s explore the right solution for you.`,
      image: empowering1, // Replace with actual image path
      button: "Start Your Journey",
    },
    {
      title: "Business Leaders",
      content: `Let’s turn these challenges into opportunities`,
      image: empowering2, // Replace with actual image path
      button: "Talk to us Today",
    },
    {
      title: "Coaches",
      content: `Let’s co-create your path forward`,
      image: empowering3, // Replace with actual image path
      button: "Get in Touch",
    },
  ];

  return (
    <>
      <div className="flex justify-center py-5 ">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] underline-offset-4 capitalize py-8">
          Bespoke Solutions for Every Journey
        </h2>
      </div>
      <section className="max-w-7xl mx-auto py-5 px-4">
        {/* Top Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`text-lg font-semibold py-10 px-6 cursor-pointer rounded-lg shadow-md transition-colors duration-300 tracking-wider
              ${
                selectedOption === index
                  ? "bg-[#F3834C] text-white"
                  : "bg-white text-black border border-gray-300"
              }
            `}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Dynamic Image Section */}
        <div className="relative rounded-lg overflow-hidden shadow-lg mb-6 h-[70vh]">
          <Image
            src={sections[selectedOption].image}
            alt="Coaching Session"
            layout="fill"
            objectFit="cover"
            className="w-full h-auto transition-opacity duration-500"
          />
        </div>

        {/* Dynamic Content */}
        {/* <p className="text-gray-700 text-lg text-center max-w-5xl mx-auto leading-relaxed mb-6">
          {sections[selectedOption].content}
        </p> */}
        <p className="text-black text-lg font-bold text-center max-w-5xl mx-auto leading-relaxed mb-6">
          {sections[selectedOption].content}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border  transition cursor-pointer"
            onClick={() => router.push("/contact-us")}
          >
            {sections[selectedOption].button}
          </button>
        </div>
      </section>
    </>
  );
}
