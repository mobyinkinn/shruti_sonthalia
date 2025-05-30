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
      content2: `Are you grappling with digital transformation, adaptability, maintaining relevance, defining your identity and direction in the current global scenario, or achieving cultural alignment? Are shifting customer expectations and market demands outpacing your adaptability, slowing decision-making, and creating inefficiencies?
`,
      image: empowering1, // Replace with actual image path
      button: "Start Your Journey",
      link: "/services/organisational_vision",
    },
    {
      title: "Business Leaders",
      content: `Let’s turn these challenges into opportunities`,
      content2: `Are you a senior executive, a promoter director of an intergenerational family
business, or a startup founder dealing with high-stakes decisions, organizational
transformation, or complex stakeholder dynamics? Is balancing vision with daily operations overwhelming you? Does navigating uncertainty feel isolating?`,
      image: empowering2, // Replace with actual image path
      button: "Talk to us Today",
      link: "/services/executive_coaching",
    },
    {
      title: "Coaches",
      content: `Let’s co-create your path forward`,
      content2: `Great coaching starts with great presence.
We support coaches growing their practice, deepening their impact, and navigating client complexity with confidence.
Through supervision, reflective practice, and ethical grounding, we help you lead with clarity—and sustain your growth.
Less noise. More alignment. Real momentum.`,
      image: empowering3, // Replace with actual image path
      button: "Get in Touch",
      link: "/services/coaching_supervision",
    },
  ];

  return (
    <>
      <div className="flex justify-center py-5 ">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] underline-offset-4 capitalize py-8">
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
                  ? "bg-[#E53935] text-white"
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
        <p className="text-black text-md text-center mx-auto leading-relaxed text-sm md:text-lg max-w-4xl mb-6">
          {sections[selectedOption].content2}
        </p>
        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border  transition cursor-pointer"
            onClick={() => router.push(`${sections[selectedOption].link}`)}
          >
            {sections[selectedOption].button}
          </button>
        </div>
      </section>
    </>
  );
}
