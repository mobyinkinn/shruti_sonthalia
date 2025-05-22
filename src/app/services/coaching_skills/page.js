// import Coaching_skills from "@/app/_components/Frontend/coaching_skills/Coaching_skills";

import Coaching_skills from "@/app/_components/Frontend/coaching_skills/Coaching_skills";

// export default function coaching_skills() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Coaching_skills />
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
      <Coaching_skills />
    </>
  );
}
