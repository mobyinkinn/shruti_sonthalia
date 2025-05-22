

// "use client";

// import { useRef, useState } from "react";
// import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Image from "next/image";

// // Corrected image paths
// const bannerImages = [
//   { src: "/new/1.jpg", alt: "First Image" },
//   { src: "/new/2.jpg", alt: "Second Image" },
//   { src: "/new/3.jpg", alt: "third Image" },
//   { src: "/new/4.jpg", alt: "fourth Image" },
// ];

// const normalStyle = {
//   height: "20px",
//   cursor: "pointer",
//   width: "20px",
//   color: "white",
// };

// const hoverStyle = {
//   height: "20px",
//   cursor: "pointer",
//   width: "20px",
//   color: "white",
// };

// const Hero = () => {
//   const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
//   const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1500,
//     loop: true,
//     autoplaySpeed: 1500,
//     autoplay: true,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="relative w-full h-screen">
//       <Slider ref={sliderRef} {...settings}>
//         {bannerImages.map((img, index) => (
//           <div key={index} className="relative w-full h-full">
//             <div className="relative w-full h-screen">
//               {/* Using Next.js Image component */}
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0"
//               />
//               {/* Black Overlay */}

//               <div className="absolute inset-0 justify-end flex flex-col w-full pb-20 items-center text-white text-center space-y-4">
//                 <div className="text-4xl font-bold">
//                   Build a culture that’s felt—not just framed
//                 </div>
//                 <div className="text-white text-lg md:text-xl max-w-4xl mb-6">
//                   Bespoke leadership and organizational solutions built for a
//                   world that is continuously evolving. Turn uncertainty into
//                   your strategic advantage.
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//     </div>
//   );
// };

// export default Hero;

"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

// Corrected image paths
const bannerImages = [
  { src: "/new/1.jpg", alt: "First Image" },
  { src: "/new/2.jpg", alt: "Second Image" },
  { src: "/new/3.jpg", alt: "Third Image" },
  { src: "/new/4.jpg", alt: "Fourth Image" },
];
const mobileImages = [
  { src: "/new/11.jpg", alt: "First Image" },
  { src: "/new/22.jpg", alt: "Second Image" },
  { src: "/new/33.jpg", alt: "Third Image" },
  { src: "/new/44.jpg", alt: "Fourth Image" },
];

const normalStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const hoverStyle = {
  height: "20px",
  cursor: "pointer",
  width: "20px",
  color: "white",
};

const Hero = () => {
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 1500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="relative w-full h-screen md:block hidden">
        <Slider ref={sliderRef} {...settings}>
          {bannerImages.map((img, index) => (
            <div key={index} className="relative w-full h-full">
              <div className="relative w-full h-screen">
                {/* Using Next.js Image component */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 justify-end flex flex-col w-full pb-20 items-center text-white text-center space-y-4">
                  <div className="text-2xl md:text-4xl font-bold px-4">
                    Build a culture that’s felt—not just framed
                  </div>
                  <div className="text-sm md:text-lg max-w-4xl mb-6 px-4">
                    Bespoke leadership and organizational solutions built for a
                    world that is continuously evolving. Turn uncertainty into
                    your strategic advantage.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative w-full h-screen md:hidden block">
        <Slider ref={sliderRef} {...settings}>
          {mobileImages.map((img, index) => (
            <div key={index} className="relative w-full h-full">
              <div className="relative w-full h-screen">
                {/* Using Next.js Image component */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 justify-end flex flex-col w-full pb-20 items-center text-white text-center space-y-4">
                  <div className="text-2xl md:text-4xl font-bold px-4">
                    Build a culture that’s felt—not just framed
                  </div>
                  <div className="text-sm md:text-lg max-w-4xl mb-6 px-4">
                    Bespoke leadership and organizational solutions built for a
                    world that is continuously evolving. Turn uncertainty into
                    your strategic advantage.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
