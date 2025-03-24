import Image from "next/image";
import image from "../assets/Image.png"
const LeadershipProwess = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 px-4 md:px-16 py-12">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E22E1B] mb-4 underline-offset-4">
          UNLOCK YOUR LEADERSHIP PROWESS
        </h2>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          In today’s volatile and rapidly evolving business environment, senior
          leaders face unprecedented challenges. The need for adaptive,
          high-performing leadership has never been greater. Yet, only 18% of
          leaders feel “very capable” of navigating this environment effectively
          <sup>*</sup>.
        </p>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          Our executive coaching programs provide a structured, data-backed, and
          results-driven approach to leadership development. These programs help
          executives navigate complexity, enhance decision-making, and drive
          organizational success by equipping leaders with the self-awareness,
          resilience, and strategic insight required to drive meaningful
          transformation within their organizations.
        </p>
        <p className="text-gray-800 text-base">
          Development Dimensions International and The Conference Board
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-md max-w-md w-full">
        <Image
          src={image}
          alt="Leadership Team Discussion"
          width={600}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default LeadershipProwess;
