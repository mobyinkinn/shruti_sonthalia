// import Home from "./_components/Frontend/home/Home";
// export default function home() {
//   return (
//       <Home />
//   );
// }



import Home from "./_components/Frontend/home/Home";


export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title:
      " RuhCo | Transforming Leadership, Strategy & Culture for Human-Centered Growth",
    description:
      "Empowering leaders to align culture, strategy, and mindset—RuhCo strengthens the human side of business to drive clarity, resilience, and growth in times of uncertainty and change.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",

    // other: {
    //   "google-site-verification": "QTcmfuX31VXilPv-HlbFdsiCkAOoSPCKra2Tz-y9CtM",
    // },
  };
}

export default async function Homepage() {
  return (
    <>
      <Home />
    </>
  );
}
