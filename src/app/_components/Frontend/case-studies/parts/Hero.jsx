// "use client";

// import Image from "next/image";
// import blog from "../assets/blog.jpg";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Header from "@/app/_components/Header";
// const Hero = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const router = useRouter();
//   const getTrasformStyles = (isHovered) => ({
//     transform: `translateY(${isHovered ? "-100%" : "0"})`,
//   });
//   return (
//     <div className="relative w-full h-[700px]">
//       <Image
//         src={blog}
//         alt="Transformational Leadership"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
//         <div>
//           <button
//             style={{
//               marginTop: "20px",
//               color: "white",
//               backgroundColor: "#151583",
//               padding: "10px 25px",
//               borderRadius: "20px",
//               // fontWeight: "bold",
//               cursor: "pointer",
//               outline: "none",
//               border: "none",
//             }}
//             onClick={() =>
//               router.push(
//                 "https://calendly.com/shrutisonthalia"
//               )
//             }
//             onMouseEnter={() => {
//               setIsHovered(true);
//             }}
//             onMouseLeave={() => {
//               setIsHovered(false);
//             }}
//           >
//             <span className="fancy-button-text-container">
//               <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
//               <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import Image from "next/image";
import blog from "../assets/blog.jpg";

import mobBanner from "../assets/Bannermob.jpg";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px]">
      <Image
        src={blog}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0 md:block hidden"
        priority
      />
      <Image
        src={mobBanner}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0 md:hidden block"
        priority
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <div>
          <button
            style={{
              marginTop: "20px",
              color: "white",
              backgroundColor: "#151583",
              padding: "10px 25px",
              borderRadius: "20px",
              cursor: "pointer",
              outline: "none",
              border: "none",
            }}
            onClick={() => router.push("https://calendly.com/shrutisonthalia")}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <span className="fancy-button-text-container">
              <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
              <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
