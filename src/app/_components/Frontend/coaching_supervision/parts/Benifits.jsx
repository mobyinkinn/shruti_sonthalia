
import Image from "next/image";
import benifit1 from "../assets/benifits/1.jpg";
import benifit2 from "../assets/benifits/2.jpg";

export default function Benifits() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 mt-12 gap-10">
        {/* Right Image Section */}
         <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 relative">
           <div className="relative w-full max-w-lg">
             <div className="absolute bg-[#151583] opacity-40 rounded-full md:w-60 md:h-60 w-45 h-45 bottom-8 md:right-30 right-18 z-111 animate-pulse"></div>

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
        <div className="w-full lg:w-1/2 space-y-6 text-[#E53935]">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-wide">
            Who Benefits from <br className="hidden sm:block" /> Coaching
            Supervision?
          </h2>
          <p className="text-[#000000] text-base sm:text-[1.3rem]">
            Coaching supervision is invaluable for:
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
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div>
                  <h3 className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-[#363B3F] text-sm sm:text-base">
              Whether you’re coaching individuals or organizations, supervision
              provides the reflective space needed to enhance professional
              excellence.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center px-4 sm:px-10 text-center mt-14">
        <span className="text-lg sm:text-xl md:text-2xl leading-snug tracking-wide font-semibold text-[#151583] max-w-5xl">
          Coaching supervision is not just a professional requirement — it’s an
          opportunity to expand your potential. Investing in supervision
          enhances your effectiveness, deepens your impact, and strengthens your
          confidence as a coach.
        </span>
      </div>
    </>
  );
}
