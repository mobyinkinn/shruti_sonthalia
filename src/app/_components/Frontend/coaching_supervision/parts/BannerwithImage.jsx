import Image from "next/image";
import image from "../assets/Image.png"
const LeadershipProwess = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 px-4 md:px-16 py-12">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E22E1B] mb-4 underline-offset-4 uppercase">
          Unlock New Depths in Your Coaching Practice
        </h2>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          Coaching supervision is an essential, structured process that enables
          coaches to reflect, grow, and refine their skills. Whether you are an
          experienced coach or new to the profession, supervision provides a
          safe, confidential space to explore challenges, enhance self-
          awareness, and improve professional effectiveness.
        </p>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          We offer high-quality coaching supervision designed to support your
          continuous professional development. With a focus on ethical practice,
          psychological insight, and systemic awareness, our supervision
          sessions empower you to bring greater impact to your clients and
          maintain your well-being as a coach.
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
