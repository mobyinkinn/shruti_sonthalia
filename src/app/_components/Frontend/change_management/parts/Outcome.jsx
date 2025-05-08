import Image from "next/image";
import workshopImage from "../assets/2.png"; // Replace with your image path

const WorkshopOutcome = () => {
  return (
    <section className=" px-4 bg-white text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-normal text-[#E22E1B] underline-offset-4 mb-5">
        At The End Of Our 3 Day Workshop
      </h2>
      {/* Subheading */}

      <div className="flex flex-col md:flex-col justify-center items-center space-y-8 md:space-y-0">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src={workshopImage}
            alt="Workshop Image"
            layout="responsive"
            width={500}
            height={300}
            className="shadow-lg"
          />
        </div>
        <p className="text-lg  text-gray-600 py-5">You will walk away with:</p>
        {/* Right Content */}
        <div className="w-full flex flex-row">
          <span className="list-disc pl-6 space-y-4 text-lg text-gray-700 text-left w-[50%] border-r-1">
            <p>ō Understanding the change equation and its significance</p>
            <p>
              ō Having built a strong vision and a positive narrative for
              transitions
            </p>
            <p>
              ō Communication blueprint with stakeholders for better change
              implementation
            </p>
            <p> ō Strategies to address conflicts arising due to uncertainty</p>
          </span>

          <span className="list-disc pl-20 space-y-4 text-lg text-gray-700 text-left w-[50%]">
            <p>ō Actions required to navigate the transition better</p>
            <p>ō Beliefs necessary for successful change leadership</p>
            <p>ō Strategies to address conflicts arising due to uncertainty</p>
            <p>
              ō A game plan on managing negative reactions to changes among
              employees/team members
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOutcome;
