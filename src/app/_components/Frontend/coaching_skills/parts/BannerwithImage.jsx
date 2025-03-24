import Image from "next/image";
import image from "../assets/persom.png"
const LeadershipProwess = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 px-4 md:px-16 py-12">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E22E1B] mb-4 underline-offset-4 uppercase">
          Lead with Influence, Not Authority
        </h2>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          In today’s fast-changing business landscape, leaders who embrace
          coaching skills unlock deeper team engagement, higher performance, and
          sustainable success. Our Coaching Skills Program isn’t just another
          leadership course—it is a results-driven program designed to enhance
          how leaders communicate, inspire, and empower their teams, with
          measurable improvements in engagement, performance, and collaboration.
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
