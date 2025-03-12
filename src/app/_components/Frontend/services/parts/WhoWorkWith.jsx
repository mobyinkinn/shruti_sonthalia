import Image from "next/image";
import one from "../assets/Mask1.png"
import two from "../assets/mask2.png";

export default function WhoWeWorkWith() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">WHO WE WORK WITH?</h2>
        <div className="space-y-4">
          {[
            {
              title: "Senior Executives & C-Suite Leaders",
              description:
                "Facing high-stakes decision-making and organizational challenges.",
            },
            {
              title: "Leadership Teams",
              description:
                "Looking to enhance strategic alignment and communication.",
            },
            {
              title: "Business Owners & Multi-Generational Enterprise Leaders",
              description:
                "Seeking to balance legacy with innovation and ensure long term stability.",
            },
            {
              title:
                "Visionary Leaders Driving Large Scale Growth and Investment",
              description:
                "Aiming to expand their influence, innovate, and create a lasting impact in their industries.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 relative">
        <div className="relative w-full max-w-lg">
          <div className="absolute bg-[#151583] opacity-60 rounded-full w-36 h-36 top-16 left-8"></div>
          <div className="absolute bg-[#151583] opacity-60 rounded-full w-44 h-44 bottom-16 right-8"></div>
          <div className="relative z-10 flex space-x-4">
            <div className="w-1/2">
              <Image
                src={one}
                width={300}
                height={300}
                alt="Leadership Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={two}
                width={300}
                height={300}
                alt="Executive Leader"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
