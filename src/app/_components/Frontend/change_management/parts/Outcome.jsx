// import Image from "next/image";
// import workshopImage from "../assets/2.png"; // Replace with your image path

// const WorkshopOutcome = () => {
//   return (
//     <section className=" px-4 bg-white text-center">
//       {/* Title */}
//       <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 mb-5">
//         At The End Of Our 3 Day Workshop
//       </h2>
//       {/* Subheading */}

//       <div className="flex flex-col md:flex-col justify-center items-center space-y-8 md:space-y-0">
//         {/* Left Image */}
//         <div className="w-full">
//           <Image
//             src={workshopImage}
//             alt="Workshop Image"
//             layout="responsive"
//             width={500}
//             height={300}
//             className="shadow-lg"
//           />
//         </div>
//         <p className="text-lg  text-gray-600 py-5">You will walk away with:</p>
//         {/* Right Content */}
//         <div className="w-full flex flex-row">
//           <span className="list-disc pl-6 space-y-4 text-lg text-gray-700 text-left w-[50%] border-r-1">
//             <p>ō Understanding the change equation and its significance</p>
//             <p>
//               ō Having built a strong vision and a positive narrative for
//               transitions
//             </p>
//             <p>
//               ō Communication blueprint with stakeholders for better change
//               implementation
//             </p>
//             <p> ō Strategies to address conflicts arising due to uncertainty</p>
//           </span>

//           <span className="list-disc pl-20 space-y-4 text-lg text-gray-700 text-left w-[50%]">
//             <p>ō Actions required to navigate the transition better</p>
//             <p>ō Beliefs necessary for successful change leadership</p>
//             <p>ō Strategies to address conflicts arising due to uncertainty</p>
//             <p>
//               ō A game plan on managing negative reactions to changes among
//               employees/team members
//             </p>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkshopOutcome;
import Image from "next/image";
import workshopImage from "../assets/2.png"; // Replace with your image path

const WorkshopOutcome = () => {
  return (
    <section className="px-4 bg-white text-center max-w-5xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 mb-8 mt-10">
        At The End Of Our 3 Day Workshop
      </h2>

      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        {/* Image */}
        <div className="w-full max-w-md">
          <Image
            src={workshopImage}
            alt="Workshop Image"
            layout="responsive"
            width={500}
            height={300}
            className="shadow-lg rounded-md"
          />
        </div>

        <p className="text-lg text-gray-600 py-5 max-w-xl">
          You will walk away with:
        </p>

        {/* Lists */}
        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8 md:gap-12">
          {/* Left List */}
          <ul className="list-disc list-inside text-lg text-gray-700 text-left md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0">
            <li>ō Understanding the change equation and its significance</li>
            <li>
              ō Having built a strong vision and a positive narrative for
              transitions
            </li>
            <li>
              ō Communication blueprint with stakeholders for better change
              implementation
            </li>
            <li>
              ō Strategies to address conflicts arising due to uncertainty
            </li>
          </ul>

          {/* Right List */}
          <ul className="list-disc list-inside text-lg text-gray-700 text-left md:w-1/2">
            <li>ō Actions required to navigate the transition better</li>
            <li>ō Beliefs necessary for successful change leadership</li>
            <li>
              ō Strategies to address conflicts arising due to uncertainty
            </li>
            <li>
              ō A game plan on managing negative reactions to changes among
              employees/team members
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOutcome;
