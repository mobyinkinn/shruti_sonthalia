import Image from "next/image";
import image from "../assets/orga_vis/Mask.png"
const LeadershipProwess = () => {
  return (
    <section className="flex flex-col md:flex-col gap-4 items-start md:items-center px-4 md:px-4 py-12 bg-[#191582] my-5 rounded-xl">
      {/* Text Section */}
      <span className="text-[2rem] mt-10 leading-12 tracking-wider font-medium capitalize text-center text-[white]">
        When Vision, Action, and Aspiration ALign-Transformation follows.
      </span>
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-xl md:text-xl font-normal text-white text-center mb-4 underline-offset-4 w-[85%]">
          Aligned companies experience 58% faster revenue growth and are 72%
          more profitable without alignment.
        </h2>
      </div>
    </section>
  );
};

export default LeadershipProwess;
