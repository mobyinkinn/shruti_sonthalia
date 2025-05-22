// import Publications from "../_components/Frontend/publications/Publications.jsx";

// export default function publications() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Publications />
//     </h2>
//   );
// }




import Publications from "../_components/Frontend/publications/Publications.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: " Publications | Leadership Research & Strategy Insights by Shruti",
    description:
      "Access powerful insights and research by Shruti Sonthalia on leadership, systems change, business agility, and coaching for real-world, inclusive impact.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
  };
}

export default async function Homepage() {
  return (
    <>
      <Publications />
    </>
  );
}
