
import About from "../_components/Frontend/about/About";


export const dynamic = "force-dynamic"; 

export async function generateMetadata() {
  return {
    title:
      "Shruti Sonthalia & RuhCo | Human-First  Purpose-Driven Leadership & Systemic Change",
    description:
      " Rooted in purpose and community, RuhCo is redefining leadership through coaching, strategy, and inclusion—led by global coach and changemaker Shruti Sonthalia.",
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
      <About />
    </>
  );
}
