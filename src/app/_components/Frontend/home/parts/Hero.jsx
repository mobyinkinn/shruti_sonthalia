// export default function Hero() {
//   return (
//     <div className="relative flex flex-col items-center justify-center ">
//       <div className="w-[100%] h-screen relative ">
//         {/* <Image src={hero} alt="" fill objectFit="cover" /> */}
//         <video
//           width="100%"
//           height="100%"
//           autoPlay
//           loop
//           muted
//           controls={false}
//           style={{ objectFit: "cover" }}
//         >
//           <source src="/Video.mp4" type="video/mp4" />
//         </video>
//       </div>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import blog from "../assets/banner.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/_components/Header";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });
  return (
    <div className="relative w-full h-[700px]">
      <Image
        src={blog}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
    </div>
  );
};

export default Hero;
