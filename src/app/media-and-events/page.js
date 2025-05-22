// import Media from "../_components/Frontend/media/Media.jsx";

// export default function organsiational_culture() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Media />
//     </h2>
//   );
// }





import Media from "../_components/Frontend/media/Media.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "In the Media | Shruti Sonthalia & RuhCo in Coaching, DEI & Social Innovation",
    description:
      " Explore RuhCo’s thought leadership in global coaching, DEI, burnout recovery, and mission-led organizations—through media, podcasts, and event highlights.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
  };
}

export default async function Homepage() {
  return (
    <>
      <Media />
    </>
  );
}
