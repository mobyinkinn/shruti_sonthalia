import Image from "next/image";
import about from "../assets/1.png"
import about2 from "../assets/2.png";
import about3 from "../assets/3.png";

import ruhco from "../assets/ruhco.png";

const LessonsSection = () => {
  return (
    <section className="py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Coaching as a discipline
            </h3>
            <p className="text-gray-700">
              An art as well as a science, coaching demands rigour and
              dedication in both aspects. My practice integrates proven
              approaches with intuitive creative enquiry – to reveal pain-points
              and embed lasting change.
            </p>
          </div>
          <Image
            src={about}
            alt="Coaching as a discipline"
            width={400}
            height={260}
            className="rounded-xl mx-auto md:mx-0"
          />
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative">
            <img
              src="/Animation.png"
              alt="Rotating"
              className="w-80 h-80 test-spin"
            />
            <div className="absolute flex flex-col items-center text-white font-semibold z-10 bottom-30 w-[10%] left-37 ">
              <p className="text-2xl md:text-2xl text-center px-4 max-w-xs uppercase">
                Lessons I Live By
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-lg mb-2">
              Meet vulnerability with respect
            </h3>
            <p className="text-gray-700">
              Coaching isn’t energy healing or esoteric practices, but
              evidence-based methods that clients can grasp, to elevate
              performance and add tangible value.
            </p>
            <div className="mt-4">
              <Image
                src={about2}
                alt="Pragmatic Transformation"
                width={400}
                height={260}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Pragmatic Transformation
            </h3>
            <p className="text-gray-700">
              The coaching relationship is a protected space where clients
              soften certain protective boundaries in order to grow. This
              courageous act requires a container of total respect.
            </p>
          </div>
          <Image
            src={about3}
            alt="Handshake Coaching"
            width={400}
            height={260}
            className="rounded-xl mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
