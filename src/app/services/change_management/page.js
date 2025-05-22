// import Change from "../../_components/Frontend/change_management/Change-management.jsx";

import Change from "@/app/_components/Frontend/change_management/Change-management";

// export default function change_management() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Change />
//     </h2>
//   );
// }







export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "RuhCo Services | Executive Coaching, Culture, Change & Vision Alignment",
    description:
      " From executive coaching to coaching skills, vision alignment to change leadership—RuhCo builds bold, values-led leaders and cultures that scale with integrity.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
  };
}

export default async function Homepage() {
  return (
    <>
      <Change />
    </>
  );
}
