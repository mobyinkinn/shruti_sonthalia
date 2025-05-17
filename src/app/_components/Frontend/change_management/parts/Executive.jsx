
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import upimage from "../assets/3.png"
const coachingSections = [
  {
    title: "Change Readiness Assessment:",
    content:
      "A comprehensive evaluation of your organization’s readiness for change, identifying gaps and opportunities.",
  },
  {
    title: "Leadership Alignment Workshops",
    content:
      "Equip your leaders with the skills to champion change and inspire their teams.",
  },
  {
    title: "Employee Engagement Strategies",
    content:
      "Proven techniques to build buy-in, reduce resistance, and foster a culture of collaboration.",
  },
  {
    title: "Communication Frameworks",
    content:
      "Customized plans to ensure clear, consistent messaging throughout the change process.",
  },
  {
    title: "Agile Implementation Support",
    content:
    "Hands-on guidance to execute change initiatives with speed and flexibility."
  },
];

export default function ExecutiveCoaching() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="md:mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-12">
      <div className="flex flex-col gap-5">
        <h3 className="text-lg text-[#151583] ">
          ō Our Change Management Framework
        </h3>
        <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4">
          What Will You Learn?
        </h2>
        <div className="mt-4 space-y-4">
          {coachingSections.map((section, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <button
                className={`flex justify-between items-center w-full text-left text-lg font-medium p-2 hover:bg-gray-100 rounded ${
                  openIndex === index ? "text-[#151583]" : "text-gray-800"
                }`}
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
      <div className="relative flex justify-center">
        <Image
          src={upimage}
          alt="Executive Coaching"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
