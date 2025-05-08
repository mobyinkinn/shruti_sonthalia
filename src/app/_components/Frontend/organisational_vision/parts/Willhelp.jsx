import Image from "next/image";

const HowWillThisHelp = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-normal text-[#E22E1B] underline-offset-4 capitalize">
          How Will This Help?
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          The programme will support organisations to:
        </p>
      </div>

      {/* Container for GIF and overlay text */}
      <div className="relative flex justify-center items-center">
        {/* Center Circle with GIF */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 text-left text-gray-700">
          <span className="list-disc pl-6 space-y-4 text-lg text-gray-600 mt-4">
            <p className="flex flex-row items-center gap-2">
              <p className="text-[#151583] text-xl">ō</p>Work on long-term
              business impact
            </p>
            <p className="flex flex-row items-center gap-2">
              <p className="text-[#151583] text-xl">ō</p>Explore new product
              lines and revenue sources
            </p>
            <p className="flex flex-row items-center gap-2">
              <p className="text-[#151583] text-xl">ō</p>Achieve clarity
              regarding business goals
            </p>
          </span>
        </div>
        <img
          src="/Animation.png"
          alt="Rotating"
          className="w-80 h-80 test-spin"
        />

        <div className="absolute flex flex-col items-center text-white font-semibold z-10">
          <p className="text-xl md:text-xl text-center px-4 max-w-xs">
            Comprehend the shifts in processes, leadership and resource
            allocation
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 text-left pl-[90px] text-gray-700">
          <span className="list-disc pl-6 space-y-4 text-lg text-gray-600 mt-4">
            <p className="flex flex-row items-center gap-2">
              <p className="text-[#151583] text-xl">ō</p>Improve ownership
              within senior leadership
            </p>
            <p className="flex flex-row items-center gap-2">
              <p className="text-[#151583] text-xl">ō</p>Develop curiosity and
              openness
            </p>
            <p className="flex flex-row items-center gap-2">
              <p className="text-[#151583] text-xl">ō</p>Be aware of the
              challenges involved
            </p>
          </span>
        </div>
        {/* Text around the Circle */}
        {/* <div className="absolute flex flex-wrap justify-around w-full px-4 md:px-10">
          
        </div> */}
      </div>
    </section>
  );
};

export default HowWillThisHelp;
