// import Image from "next/image";
// import one from "../assets/Mask1.png"
// import two from "../assets/mask2.png";

// export default function WhoWeWorkWith() {
//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
//       {/* Left Text Section */}
//       <div className="lg:w-1/2 space-y-6">
//         <h2 className="text-3xl font-bold">WHO WE WORK WITH?</h2>
//         <div className="space-y-4">
//           {[
//             {
//               title: "Senior Executives & C-Suite Leaders",
//               description:
//                 "Facing high-stakes decision-making and organizational challenges.",
//             },
//             {
//               title: "Leadership Teams",
//               description:
//                 "Looking to enhance strategic alignment and communication.",
//             },
//             {
//               title: "Business Owners & Multi-Generational Enterprise Leaders",
//               description:
//                 "Seeking to balance legacy with innovation and ensure long term stability.",
//             },
//             {
//               title:
//                 "Visionary Leaders Driving Large Scale Growth and Investment",
//               description:
//                 "Aiming to expand their influence, innovate, and create a lasting impact in their industries.",
//             },
//           ].map((item, index) => (
//             <div key={index} className="flex items-start gap-3">
//               <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
//               <div>
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Image Section */}
//       <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 relative">
//         <div className="relative w-full max-w-lg">
//           <div className="absolute bg-[#151583] opacity-60 rounded-full w-36 h-36 top-16 left-8"></div>
//           <div className="absolute bg-[#151583] opacity-60 rounded-full w-44 h-44 bottom-16 right-8"></div>
//           <div className="relative z-10 flex space-x-4">
//               <div className="motion-translate-y-loop-25">
//                 <Image
//                   src={one}
//                   width={300}
//                   height={300}
//                   alt="Leadership Team"
//                   className="rounded-lg shadow-lg"
//                 />
//             </div>

//             <div className="w-1/2">
//               <Image
//                 src={two}
//                 width={300}
//                 height={300}
//                 alt="Executive Leader"
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import one from "../assets/program/1.jpg";
import two from "../assets/program/2.jpg";

export default function WhoWeWorkWith() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          Who is this Program for?
        </h2>
        <span className="text-[1rem] leading-7 tracking-widest">
          This program is designed for senior leaders across industries. Some
          professionals who can leverage the programme are:
        </span>
        <div className="space-y-4 mt-5">
          {[
            {
              title: "C-Suite Executives",
              description:
                "Facing high-stakes decision-making and organizational challenges.",
            },
            {
              title: "Managers And Team Leaders",
              description:
                "Looking to enhance strategic alignment and communication.",
            },
            {
              title: "Aspiring Coaches",
              description:
                "Seeking to balance legacy with innovation and ensure long-term stability.",
            },
            {
              title: "Leaders Transitioning To New Roles",
              description:
                "Aiming to expand their influence, innovate, and create a lasting impact in their industries.",
            },
            {
              title: "HR And L&D Professionals",
              description:
                "Aiming to expand their influence, innovate, and create a lasting impact in their industries.",
            },
            // {
            //   title: "HR And L&D Professionals",
            //   description: "ō  Start-up Founders And Small Business Owners",
            // },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold">
                  {" "}
                  <span className="text-[#151583] text-[1.3rem] pr-2">
                    ō
                  </span>{" "}
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 relative">
        <div className="relative w-full max-w-lg">
          {/* <div className="absolute bg-[#151583] opacity-60 rounded-full w-36 h-36 top-16 left-8"></div>
          <div className="absolute bg-[#151583] opacity-60 rounded-full w-44 h-44 bottom-16 right-8"></div> */}
          <div className="absolute bg-[#151583] opacity-40 rounded-full w-60 h-60 bottom-8 right-30 z-111 animate-pulse"></div>
          <div className="relative z-10 flex space-x-4">
            {/* Image 1 with floating animation */}
            <div className="w-1/2 float-animation-reverse">
              <Image
                src={one}
                width={300}
                height={300}
                alt="Leadership Team"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Image 2 with floating animation but slightly delayed */}
            <div className="w-1/2 float-animation">
              <Image
                src={two}
                width={300}
                height={300}
                alt="Executive Leader"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

