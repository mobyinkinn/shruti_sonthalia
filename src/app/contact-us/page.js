// import ContactMain from "../_components/Frontend/contactus/ContactMain";

// export default function Index(){
//     return (
//         <ContactMain />
//     );
// }




import ContactMain from "../_components/Frontend/contactus/ContactMain.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Contact RuhCo | Start Your Leadership Transformation Journey",
    description:
    "Let’s build your next leadership breakthrough. Reach out to RuhCo for tailored coaching programs, leadership transformation, and strategic culture change.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
  };
}

export default async function Homepage() {
  return (
    <>
      <ContactMain />
    </>
  );
}
