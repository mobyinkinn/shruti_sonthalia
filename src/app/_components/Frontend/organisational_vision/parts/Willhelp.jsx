import Image from "next/image";

const HowWillThisHelp = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E22E1B]">
          HOW WILL THIS HELP?
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          The programme will support organisations to:
        </p>
      </div>

      {/* Container for GIF and overlay text */}
      <div className="relative flex justify-center items-center">
        {/* Center Circle with GIF */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 text-center text-gray-700">
          <span className="list-disc pl-6 space-y-4">
            <p>Work on long-term business impact</p>
            <p>Explore new product lines and revenue sources</p>
            <p>Achieve clarity regarding business goals</p>
          </span>
        </div>
        <div className="rounded-full overflow-hidden">
          <Image
            src="/Animation.gif" // Replace with the path to your GIF
            alt="Main Circle GIF"
            width={484} // Adjust to fit your size
            height={484}
            className="object-cover"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute flex flex-col items-center text-white font-semibold z-10">
          <p className="text-xl md:text-xl text-center px-4 max-w-xs">
            Comprehend the shifts in processes, leadership and resource
            allocation
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 text-center text-gray-700">
          <span className="list-disc pl-6 space-y-4">
            <p>Improve ownership within senior leadership</p>
            <p>Develop curiosity and openness</p>
            <p>Be aware of the challenges involved</p>
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
