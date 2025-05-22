// import Pioneering from "../_components/Frontend/pioneering/Pioneering";

// export default function pioneering() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Pioneering />
//     </h2>
//   );
// }


import Pioneering from "../_components/Frontend/pioneering/Pioneering.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "RuhCo Community Philosophy | Where Culture Meets Purpose",
    description:
    "Leadership is not solo. Discover RuhCo’s Community First philosophy—centering trust, belonging, and shared growth as the bedrock of transformational leadership.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
  };
}

export default async function Homepage() {
  return (
    <>
      <Pioneering />
    </>
  );
}

