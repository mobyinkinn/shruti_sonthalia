import Image from "next/image";
import image from "../assets/orga_vis/Mask.png"
const LeadershipProwess = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 px-4 md:px-4 py-12">
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-2xl md:text-2xl font-normal text-black mb-4 underline-offset-4 w-[85%]">
          Companies that are aligned grow revenue 58% faster and are 72% more
          profitable, compared to their unaligned peers (LSA).
        </h2>
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
