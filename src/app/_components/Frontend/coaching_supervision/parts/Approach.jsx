// "use client";
// import React, { useRef } from "react";
// import approach from "../assets/approach/approach.png";
// import circle from "../assets/approach/circle.gif";
// import service from "../assets/approach/service.gif";
// import img1 from "../assets/approach/img1.png";
// import img2 from "../assets/approach/img2.png";
// import img3 from "../assets/approach/img3.png";
// import img4 from "../assets/approach/img4.png";
// import { useInView } from "framer-motion";
// import { motion } from "framer-motion";
// import upimage from "../assets/12.png";
// import Image from "next/image";

// const Approach = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   return (
//     <>
//       <div className="flex items-center flex-col gap-4 pt-16">
//         <h5 className="font-medium uppercase tracking-wider text-[#151583]">
//           Our Approach
//         </h5>
//         <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
//           What You Can Expect?
//         </h2>
//         <span className="text-center leading-8 tracking-wider font-normal text-[1.2rem] ">
//           We offer individual and group supervision tailored to your needs. Our
//           experienced supervisors create a non-judgmental, supportive
//           environment where you can explore real client cases, receive
//           constructive feedback, and develop advanced coaching techniques.
//         </span>
//       </div>
//       <div className="flex flex-col mt-5 overflow-hidden">
//         <div
//           ref={ref}
//           className="relative flex flex-row justify-between items-center h-screen mt-12"
//         >
//           {/* Left Section */}
//           <div className="flex flex-col w-[24%] space-y-8">
//             <motion.div
//               initial={{ x: -200, opacity: 0 }}
//               animate={isInView ? { x: 0, opacity: 1 } : {}}
//               transition={{ duration: 1 }}
//               className="flex items-center justify-center flex-col"
//             >
//               <div
//                 className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img1.src})` }}
//               ></div>
//               <span className="text-[1.2rem] leading-7 tracking-widest text-center">
//                 Confidential and supportive discussions that encourage deep
//                 reflection.
//               </span>
//             </motion.div>

//             <motion.div
//               initial={{ x: -200, opacity: 0 }}
//               animate={isInView ? { x: 0, opacity: 1 } : {}}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="flex items-center justify-center flex-col"
//             >
//               <div
//                 className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img3.src})` }}
//               ></div>
//               <span className="text-[1.2rem] leading-7 tracking-widest text-center">
//                 Techniques to manage emotional demands and prevent burnout.
//               </span>
//             </motion.div>
//           </div>

//           {/* Center Image */}
//           {/* <div className="relative w-[600px] flex items-center justify-center">
//             <div
//               className="absolute w-[580px] h-[600px] rounded-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${circle.src})` }}
//             ></div>
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={isInView ? { scale: 1, opacity: 1 } : {}}
//               transition={{ duration: 1 }}
//               className="relative z-10 w-[400px] min-h-[302px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[450px] rounded-[40px] bg-cover bg-center"
//               style={{ backgroundImage: `url(${approach.src})` }}
//             ></motion.div>
//           </div> */}

//  <div className="relative flex justify-center">
//         <Image
//           src={upimage}
//           alt="Executive Coaching"
//           width={600}
//           height={400}
//           className="rounded-lg"
//         />
//       </div>
//           {/* Right Section */}
//           <div className="flex flex-col w-[24%] space-y-8">
//             <motion.div
//               initial={{ x: 200, opacity: 0 }}
//               animate={isInView ? { x: 0, opacity: 1 } : {}}
//               transition={{ duration: 1 }}
//               className="flex items-center justify-center flex-col"
//             >
//               <div
//                 className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img2.src})` }}
//               ></div>
//               <span className="text-[1.2rem] leading-7 tracking-widest text-center">
//                 Ethical guidance and best practices to navigate client
//                 challenges.
//               </span>
//             </motion.div>

//             <motion.div
//               initial={{ x: 200, opacity: 0 }}
//               animate={isInView ? { x: 0, opacity: 1 } : {}}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="flex items-center justify-center flex-col"
//             >
//               <div
//                 className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img4.src})` }}
//               ></div>
//               <span className="text-[1.2rem] leading-7 tracking-widest text-center">
//                 New perspectives and methodologies to enrich your coaching
//                 approach.
//               </span>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Approach;

"use client";
import React, { useRef } from "react";
import approach from "../assets/approach/approach.png";
import circle from "../assets/approach/circle.gif";
import service from "../assets/approach/service.gif";
import img1 from "../assets/approach/img1.png";
import img2 from "../assets/approach/img2.png";
import img3 from "../assets/approach/img3.png";
import img4 from "../assets/approach/img4.png";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import upimage from "../assets/12.png";
import Image from "next/image";

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div className="flex items-center flex-col gap-4 pt-16 px-4 sm:px-6 md:px-10">
        <h5 className="font-medium uppercase tracking-wider text-[#151583]">
          Our Approach
        </h5>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize">
          What You Can Expect?
        </h2>
        <span className="text-center leading-8 tracking-wide font-normal text-base sm:text-lg max-w-4xl">
          We offer individual and group supervision tailored to your needs. Our
          experienced supervisors create a non-judgmental, supportive
          environment where you can explore real client cases, receive
          constructive feedback, and develop advanced coaching techniques.
        </span>
      </div>

      <div className="flex flex-col mt-10 px-4 sm:px-6 md:px-12">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-12"
        >
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-[24%] space-y-8">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="flex items-center justify-center flex-col text-center"
            >
              <div
                className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img1.src})` }}
              ></div>
              <span className="text-base sm:text-[1.1rem] leading-7 tracking-wide">
                Confidential and supportive discussions that encourage deep
                reflection.
              </span>
            </motion.div>

            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center flex-col text-center"
            >
              <div
                className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img3.src})` }}
              ></div>
              <span className="text-base sm:text-[1.1rem] leading-7 tracking-wide">
                Techniques to manage emotional demands and prevent burnout.
              </span>
            </motion.div>
          </div>

          {/* Center Image */}
          <div className="w-full max-w-md flex justify-center relative">
            <Image
              src={upimage}
              alt="Executive Coaching"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-full lg:w-[24%] space-y-8">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="flex items-center justify-center flex-col text-center"
            >
              <div
                className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img2.src})` }}
              ></div>
              <span className="text-base sm:text-[1.1rem] leading-7 tracking-wide">
                Ethical guidance and best practices to navigate client
                challenges.
              </span>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center flex-col text-center"
            >
              <div
                className="hidden md:flex w-[80px] h-[80px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img4.src})` }}
              ></div>
              <span className="text-base sm:text-[1.1rem] leading-7 tracking-wide">
                New perspectives and methodologies to enrich your coaching
                approach.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;
