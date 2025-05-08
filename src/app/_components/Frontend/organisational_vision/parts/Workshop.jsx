import Image from "next/image";
import workshop from "../assets/workshop/workshop.png";
const Workshop = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 py-6">
      {/* Text Section */}

      <div className="flex-1">
        {/* <p className="text-[#151583] font-medium text-base">
          ō Discover Your Vision:
        </p> */}
        <h2 className="text-2xl md:text-3xl font-normal text-[#E22E1B] underline-offset-4 capitalize">
          A Workshop to Redefine Success
        </h2>
        <p className="text-gray-800 text-base leading-relaxed my-4">
          What does it take to become the Apple or the Disney of your industry?
          Surprisingly, it’s not just a structured business plan or well-crafted
          promotional pitches. Research suggests that most successful companies
          value vision more than numbers (Forbes, 2019). This is because a
          vision is like the glue that binds the employees and stakeholders of a
          company together and propels them to a common goal.
        </p>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          A vision is not just about making profits. It’s also about the company
          culture, its ethics and the alignment of its business actions with
          what the company aspires to be. In today’s rapidly evolving business
          landscape, a compelling and aligned organizational vision is the
          cornerstone of success. RuhCo’s Build, Align and Harness Your Vision
          workshop addresses this gap and lets leaders and organizations soar to
          new heights!
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-md max-w-md w-full">
        <Image
          src={workshop}
          alt="Leadership Team Discussion"
          width={600}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Workshop;
