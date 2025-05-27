// import React from "react";
// import hero_banner from "../assets/1.jpg";

// const HeroCopy = () => {
//   return (
//     <div className="flex flex-col ">
//       <div>
//         <div
//           className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[434px] xl:min-h-[600px] bg-cover bg-center"
//           style={{ backgroundImage: `url(${hero_banner.src})`, backgroundSize:"contain", backgroundRepeat:"no-repeat" }}
//         >

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroCopy;

import React from "react";
import Image from "next/image";


const HeroCopy = ({image, mobile}) => {
  return (
    <>
      <div className="relative h-screen hidden md:flex flex-col items-center justify-center">
        <Image
          src={image.src}
          alt="The Elan"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/25"></div>
      </div>
      <div className="relative h-screen md:hidden flex flex-col items-center justify-center">
        <Image
          src={mobile.src}
          alt="The Elan"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/25"></div>
      </div>
    </>
  );
};

export default HeroCopy;

