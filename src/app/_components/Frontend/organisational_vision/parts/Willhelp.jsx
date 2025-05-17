// import Image from "next/image";

// const HowWillThisHelp = () => {
//   return (
//     <section className="py-16 px-4 md:px-10 bg-white relative">
//       <div className="text-center mb-12">
//         <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
//           How Will This Help?
//         </h2>
//         <p className="text-lg text-gray-600 mt-4">
//           The programme will support organisations to:
//         </p>
//       </div>

//       {/* Container for GIF and overlay text */}
//       <div className="relative flex justify-center items-center">
//         {/* Center Circle with GIF */}
//         <div className="w-full md:w-1/2 mt-12 md:mt-0 text-left text-gray-700">
//           <span className="list-disc pl-6 space-y-4 text-lg text-gray-600 mt-4">
//             <p className="flex flex-row items-center gap-2">
//               <p className="text-[#151583] text-xl">ō</p>Work on long-term
//               business impact
//             </p>
//             <p className="flex flex-row items-center gap-2">
//               <p className="text-[#151583] text-xl">ō</p>Explore new product
//               lines and revenue sources
//             </p>
//             <p className="flex flex-row items-center gap-2">
//               <p className="text-[#151583] text-xl">ō</p>Achieve clarity
//               regarding business goals
//             </p>
//           </span>
//         </div>
//         <img
//           src="/Animation.png"
//           alt="Rotating"
//           className="md:w-80 md:h-80 w-56 h-56 test-spin"
//         />

//         <div className="absolute flex flex-col items-center text-white font-semibold z-10">
//           <p className="text-xl md:text-lg text-center px-4 max-w-xs">
//             Comprehend the shifts in processes, leadership and resource
//             allocation
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 mt-12 md:mt-0 text-left pl-[90px] text-gray-700">
//           <span className="list-disc pl-6 space-y-4 text-lg text-gray-600 mt-4">
//             <p className="flex flex-row items-center gap-2">
//               <p className="text-[#151583] text-xl">ō</p>Improve ownership
//               within senior leadership
//             </p>
//             <p className="flex flex-row items-center gap-2">
//               <p className="text-[#151583] text-xl">ō</p>Develop curiosity and
//               openness
//             </p>
//             <p className="flex flex-row items-center gap-2">
//               <p className="text-[#151583] text-xl">ō</p>Be aware of the
//               challenges involved
//             </p>
//           </span>
//         </div>
//         {/* Text around the Circle */}
//         {/* <div className="absolute flex flex-wrap justify-around w-full px-4 md:px-10">
          
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default HowWillThisHelp;
import Image from "next/image";

const HowWillThisHelp = () => {
  return (
    <section className="py-16 md:px-10 bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          How Will This Help?
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          The programme will support organisations to:
        </p>
      </div>

      {/* Container for GIF and overlay text */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left List */}
        <div className="w-full md:w-1/3 text-left text-gray-700">
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-[#151583] text-xl">ō</span>
              Work on long-term business impact
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#151583] text-xl">ō</span>
              Explore new product lines and revenue sources
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#151583] text-xl">ō</span>
              Achieve clarity regarding business goals
            </li>
          </ul>
        </div>

        {/* Center Circle with GIF */}
        <div className="relative w-56 h-56 md:w-80 md:h-80 flex justify-center items-center">
          <img
            src="/Animation.png"
            alt="Rotating"
            className="w-56 h-56 md:w-80 md:h-80 test-spin"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="text-white font-semibold text-center text-base md:text-lg max-w-xs">
              Comprehend the shifts in processes, leadership and resource
              allocation
            </p>
          </div>
        </div>

        {/* Right List */}
        <div className="w-full md:w-1/3 text-left text-gray-700 pl-0 md:pl-10">
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-[#151583] text-xl">ō</span>
              Improve ownership within senior leadership
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#151583] text-xl">ō</span>
              Develop curiosity and openness
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#151583] text-xl">ō</span>
              Be aware of the challenges involved
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowWillThisHelp;
