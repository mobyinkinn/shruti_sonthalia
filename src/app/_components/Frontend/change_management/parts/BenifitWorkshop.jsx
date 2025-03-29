import Image from "next/image";
import workshopImage from "../assets/bg2.png"; // Replace with your image path

const WorkshopBenefits = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white p-8">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src={workshopImage}
          alt="Workshop Participants"
          layout="responsive"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 md:pl-10">
        <h2 className="text-3xl font-semibold text-[#e22e1b] mb-4">
          WHO BENEFITS FROM THIS WORKSHOP?
        </h2>
        <p className="text-lg text-gray-700 mb-6">Our program is ideal for:</p>
        <span className="pst-disc pl-5 text-lg text-gray-700">
          <p>
            <span className="text-[#151583] text-[1.3rem] pr-2">ō</span> C-suite
            executives, managers, and team leaders driving transformation
          </p>
          <p>
            <span className="text-[#151583] text-[1.3rem] pr-2">ō</span> HR &
            Change Managers implementing cultural and operational shifts
          </p>
          <p>
            <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
            Technology & Digital Transformation Teams ensuring smooth tech
            adoption
          </p>
          <p>
            <span className="text-[#151583] text-[1.3rem] pr-2">ō</span> Project
            & Strategy Teams responsible for executing large-scale changes
          </p>
          <p>
            <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
            Organizations undergoing M&As, Restructuring, or Regulatory
            Adjustments
          </p>
          <p>Start-up founders and small business owners</p>
        </span>
      </div>
    </section>
  );
};

export default WorkshopBenefits;
