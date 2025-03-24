// "use client";

// import { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// const coachingSections = [
//   {
//     title: "Psychometric Assessments (360-Degree Feedback)",
//     content:
//       "Psychometric assessments, such as Hogan and 360-degree feedback, provide valuable insights for deeper self-awareness. These tools help individuals understand their strengths, areas for growth, and behavioral impact on others.",
//   },
//   { title: "Tripartite Alignment Sessions", content: "" },
//   { title: "Individual Development Plan", content: "" },
//   { title: "Personalized One-on-One Coaching Sessions", content: "" },
//   { title: "Consistent Tracking and Monitoring", content: "" },
//   { title: "Ongoing Organizational Integration", content: "" },
//   {
//     title: "Culturally Relevant Coaching for Indian Organizations",
//     content: "",
//   },
//   { title: "World-Class Coaches", content: "" },
// ];

// export default function Executive() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-900">
//         OUR EXECUTIVE COACHING INTEGRATES:
//       </h2>
//       <div className="mt-4 space-y-4">
//         {coachingSections.map((section, index) => (
//           <div key={index} className="border-b border-gray-300 pb-2">
//             <button
//               className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 p-2 hover:bg-gray-100 rounded"
//               onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             >
//               {section.title}
//               {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
//             </button>
//             {openIndex === index && section.content && (
//               <p className="mt-2 text-gray-700 text-sm p-2 bg-gray-50 rounded">
//                 {section.content}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import upimage from "../assets/upimage.png"
const coachingSections = [
  {
    title: "Psychometric Assessments (360-Degree Feedback)",
    content:
      "Psychometric assessments, such as Hogan and 360-degree feedback, provide valuable insights for deeper self-awareness. These tools help individuals understand their strengths, areas for growth, and behavioral impact on others.",
  },
  { title: "Tripartite Alignment Sessions", content: "" },
  { title: "Individual Development Plan", content: "" },
  { title: "Personalized One-on-One Coaching Sessions", content: "" },
  { title: "Consistent Tracking and Monitoring", content: "" },
  
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
        <h2 className="text-3xl w-[80%] text-[#E22E1B] tracking-wider font-medium uppercase">
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
