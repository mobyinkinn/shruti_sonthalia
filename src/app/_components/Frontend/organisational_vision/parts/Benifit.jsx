import Image from "next/image";
import benifit1 from "../assets/benifits/benifit1.png";
import benifit2 from "../assets/benifits/benifit2.png";
export default function Benifit() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mt-12">
      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 relative">
        <div className="relative w-full max-w-lg">
          {/* <div className="absolute bg-[#151583] opacity-60 rounded-full w-36 h-36 top-16 left-8"></div>
          <div className="absolute bg-[#151583] opacity-60 rounded-full w-44 h-44 bottom-16 right-8"></div> */}
          {/* <div className="absolute bg-[#151583] opacity-40 rounded-full w-56 h-56 top-8 left-0 z-111 animate-pulse"></div> */}
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
      <div className="lg:w-1/2 space-y-6 text-[#E22E1B]">
        <h2 className="text-4xl font-medium uppercase tracking-wider leading-12">
          Who Benefits from This Workshop?
        </h2>
        <p className="text-[#000000] text-[1.3rem]">
          Our programs are designed for organizations of all sizes and
          industries, including:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Executive Coaches",
              description:
                "Who looking to refine their leadership coaching skills.",
            },
            {
              title: "Mentor Coaches",
              description: "Who are working with emerging professionals.",
            },
            {
              title: "Organizational Coaches",
              description: "Who are managing complex workplace dynamics.",
            },
            {
              title: "Organizational Coaches",
              description: "Who are managing complex workplace dynamics.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <p className="text-[#151583] text-2xl">ō</p>
              <div>
                <h3 className="text-[1.3rem] text-black ">{item.title}</h3>
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
