"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import why from "../assets/why.png";
const coachingSections = [
  {
    title: "Employee Engagement and Retention",
    content: `People stay where they feel they belong.  Aligned cultures boost engagement and reduce attrition by up to 72% (Gallup, 2023)`,
  },
  {
    title: "Performance and Productivity",
    content:
      "No one-size-fits-all solutions. We tailor coaching to your unique organizational culture, leadership challenges, and power structures for real-world impact.",
  },
  {
    title: "Adaptability to Change",
    content:
      "Develop coaching reflexes that turn everyday conversations—whether in boardrooms or check-ins—into opportunities for growth and empowerment.",
  },
  {
    title: "Customer Experience",
    content:
      "Integrating emotional intelligence, psychological safety, and well-being, we help leaders cultivate self-awareness, trust, and resilience for long-term success.",
  },
  {
    title: "Employee Well-being",
    content: "increase trust, engagement, and retention.",
  },
];

export default function Why() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto md:py-6 md:px-8  py-3 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-12">
     
      <div className="flex-1 rounded-2xl overflow-hidden shadow-md max-w-xl w-full">
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          style={{ objectFit: "cover" }}
        >
          <source src="/12.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl w-[80%] text-[#E53935] tracking-wider font-medium">
          Why Culture Matters?
        </h2>
        <div className="mt-4 space-y-4">
          {coachingSections.map((section, index) => (
            <div key={index} className=" pb-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`flex justify-between items-center w-full text-left text-lg font-medium p-2 rounded transition-colors duration-200 ${
                  openIndex === index ? "text-[#151583]" : "text-gray-800 "
                }`}
              >
                {section.title}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>

              {openIndex === index && section.content && (
                <p className="mt-2 text-gray-700 text-sm p-2 rounded">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
