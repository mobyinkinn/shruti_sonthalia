
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import upimage from "../assets/upimage.png"
const coachingSections = [
  {
    title: "The Power-With Method",
    content: `Shift from "power-over" to "power-with" leadership. Our experiential approach ensures coaching is seamlessly integrated into daily interactions—not just structured sessions.`,
  },
  {
    title: "Context-Driven Coaching",
    content:
      "No one-size-fits-all solutions. We tailor coaching to your unique organizational culture, leadership challenges, and power structures for real-world impact.",
  },
  {
    title: "The Leadership Reflex Model",
    content:
      "Develop coaching reflexes that turn everyday conversations—whether in boardrooms or check-ins—into opportunities for growth and empowerment.",
  },
  {
    title: "Holistic, Human-Centered Coaching",
    content:
      "Integrating emotional intelligence, psychological safety, and well-being, we help leaders cultivate self-awareness, trust, and resilience for long-term success.",
  },
  {
    title: "Build a psychologically safe workplace",
    content: "increase trust, engagement, and retention.",
  },
  {
    title: "Enhance listening & questioning skills",
    content: "move from problem-solving to empowerment.",
  },
];

export default function ExecutiveCoaching() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-12">
      <div className="relative">
        <Image
          src={upimage}
          alt="Executive Coaching"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          What You Will Get at the End of this Program
        </h2>
        <div className="mt-4 space-y-4">
          {coachingSections.map((section, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 p-2 hover:bg-gray-100 rounded"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {section.title}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openIndex === index && section.content && (
                <p className="mt-2 text-gray-700 text-sm p-2 bg-gray-50 rounded">
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
