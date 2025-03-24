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
import empowering1 from "../assets/empowing/empower1.png"
export default function Empowering() {
  // State to track selected option
  const [selectedOption, setSelectedOption] = useState(0);

  // Data for the three sections
  const sections = [
    {
      title: "EXECUTIVE COACHING FOR SENIOR LEADERS",
      content:
      "Are you a practicing executive coach aiming to gain accreditation or elevate your coaching  practice? Do you struggle with complex client dynamics, ethical dilemmas, or maintaining  your well-being while delivering impactful coaching? Do blind spots or emotional fatigue  hinder your progress? Would a structured, reflective space be valuable for enhancing your  skills? And are you also seeking support to brainstorm and discover authentic ways to grow  your business and community?",
      image: empowering1, // Replace with actual image path
    },
    {
      title: "COACHING SUPERVISION FOR ASPIRING COACHES",
      content:
      "Are you a practicing executive coach aiming to gain accreditation or elevate your coaching  practice? Do you struggle with complex client dynamics, ethical dilemmas, or maintaining  your well-being while delivering impactful coaching? Do blind spots or emotional fatigue  hinder your progress? Would a structured, reflective space be valuable for enhancing your  skills? ",
      image: empowering1, // Replace with actual image path
    },
    {
      title: "MASTER TRANSFORMATIONAL LEADERSHIP",
      content:
        "Learn to inspire and lead with a transformative approach. This program is designed for professionals seeking to master advanced leadership techniques and create meaningful impact in their organizations and communities.",
      image: empowering1, // Replace with actual image path
    },
  ];

  return (
    <>
      <div className="flex justify-center py-5 ">
        <span className="text-black text-[2.5rem]">Empowering Solutions</span>
      </div>
      <section className="max-w-7xl mx-auto py-5 px-4">
        {/* Top Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`text-lg font-semibold py-10 px-6 rounded-lg shadow-md transition-colors duration-300 tracking-wider
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
        <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src={sections[selectedOption].image}
            alt="Coaching Session"
            width={1000}
            height={500}
            className="w-full h-auto transition-opacity duration-500"
          />
        </div>

        {/* Dynamic Content */}
        <p className="text-gray-700 text-lg text-center max-w-5xl mx-auto leading-relaxed mb-6">
          {sections[selectedOption].content}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border  transition cursor-pointer">
            Start Journey
          </button>
        </div>
      </section>
    </>
  );
}
