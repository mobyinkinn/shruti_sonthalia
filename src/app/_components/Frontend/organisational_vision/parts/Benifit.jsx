import Image from "next/image";
import benifit1 from "../assets/benifits/1.jpg";
import benifit2 from "../assets/benifits/2.jpg";
export default function Benifit() {
  return (
    <section className="flex flex-col gap-[75px] lg:flex-row items-center justify-between mt-12">
      {/* Right Image Section */}
      <div className="w-[40%] flex items-center justify-center mt-10 lg:mt-0 relative">
        <div className="relative w-full max-w-lg">
          <div className="absolute bg-[#151583] opacity-40 rounded-full w-60 h-60 bottom-8 right-30 z-111 animate-pulse"></div>

          <div className="relative z-10 flex space-x-4">
            <div className="w-1/2 float-animation">
              <Image
                src={benifit1}
                width={300}
                height={300}
                alt="Leadership Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 float-animation-reverse">
              <Image
                src={benifit2}
                width={300}
                height={300}
                alt="Executive Leader"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Left Text Section */}
      <div className="md:w-[60%] w-[90%] space-y-6 text-[#E53935]">
        <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          Who Benefits from This Workshop?
        </h2>
        <p className="text-gray-800 text-base leading-relaxed my-4">
          Our programs are designed for organizations of all sizes and
          industries, including:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Large Enterprises: ",
              description:
                "Multinational corporations navigating complex transformations or mergers and acquisitions.",
            },
            {
              title: "Mid-Sized Companies:",
              description:
                "Growing businesses looking to scale operations and aiming to improve decision-making and cross-functional collaboration. Midsize Enterprises Corporations Undergoing Transformation due to M&A, leadership change, or digital disruption.Organizations with Declining Employee Engagement that need to re-energize and inspire their workforce.",
            },
            {
              title: "Public Sector and NGOs:",
              description:
                "High-growth companies transitioning from founder-led to professionally managed structures.",
            },
            {
              title: "Startups and Scale-ups:",
              description:
                "Government agencies and nonprofits seeking to modernize and align their vision with stakeholder expectations.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <p className="text-[#151583] text-2xl">ō</p>
              <div>
                <h3 className="text-gray-800 text-base leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-[#363B3F]">{item.description}</p>
              </div>
            </div>
          ))}
          <p className="text-[#363B3F]">
            Whether you’re coaching individuals or organizations, supervision
            provides the reflective space needed to enhance professional
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
