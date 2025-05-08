// // export default function Hero() {
// //   return (
// //     <div className="relative flex flex-col items-center justify-center ">
// //       <div className="w-[100%] h-screen relative ">
// //         {/* <Image src={hero} alt="" fill objectFit="cover" /> */}
// //         <video
// //           width="100%"
// //           height="100%"
// //           autoPlay
// //           loop
// //           muted
// //           controls={false}
// //           style={{ objectFit: "cover" }}
// //         >
// //           <source src="/Video.mp4" type="video/mp4" />
// //         </video>
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import Image from "next/image";
// import blog from "../assets/banner.png";
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

//       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
//     </div>
//   );
// };

// export default Hero;

// "use client";
// import Slider from "react-slick"; // react-slick for carousel functionality
// import "slick-carousel/slick/slick.css"; // Import Slick CSS
// import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
// import { useRef } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import first from "../assets/new/1.jpg"
// import second from "../assets/new/2.jpg";
// import Image from "next/image";

// const Hero = () => {
//   const TwosliderRef = useRef(null);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   const cardContent = [
//     {
//       title: "Data-Driven",
//       description:
//         "We use behavioral analytics and tracking to measure progress and drive accountability.",
//       bgClass: "bg-gradient-to-r from-[#f43d24] to-[#8d2e69]",
//       image: first,
//     },
//     {
//       title: "Tailored to Your Organization’s Needs",
//       description:
//         "Our solutions are not one-size-fits-all. We create customized strategies based on your industry, company culture, and transformation objectives.",
//       bgClass: "bg-gradient-to-r from-[#8d2e69] to-[#3D2B66]",
//       image: second,
//     },
//     {
//       title: "Proven Track Record",
//       description:
//         "We’ve helped over x number of organizations across industries successfully navigate change, with a x% success rate in achieving desired outcomes.",
//       bgClass: "bg-gradient-to-r from-[#3D2B66] to-[#191982]",
//       image: first,
//     },
//     {
//       title: "Proven Track Record",
//       description:
//         "We’ve helped over x number of organizations across industries successfully navigate change, with a x% success rate in achieving desired outcomes.",
//       bgClass: "bg-gradient-to-r from-[#f43d24] to-[#8d2e69]",
//       image: first,
//     },
//     {
//       title: "Data-Driven",
//       description:
//         "We use behavioral analytics and tracking to measure progress and drive accountability.",
//       bgClass: "bg-gradient-to-r from-[#8d2e69] to-[#3D2B66]",
//       image: second,
//     },
//     {
//       title: "Tailored to Your Organization’s Needs",
//       description:
//         "Our solutions are not one-size-fits-all. We create customized strategies based on your industry, company culture, and transformation objectives.",
//       bgClass: "bg-gradient-to-r from-[#3D2B66] to-[#191982]",
//       image: first,
//     },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white text-center relative">
//       <h3 className="text-xl text-[#151583] mb-4 ">The RuhCo Approach</h3>

//       <h2 className="text-4xl font-semibold text-[#E22E1B] mb-6">
//         WHY WE STAND APART
//       </h2>

//       {/* Card Slider */}
//       <div>
//         <Slider ref={TwosliderRef} {...settings}>
//           {cardContent.map((card, index) => (
//             <div key={index} className="px-4">
//               <div className="relative w-full h-[500vh]">

//               <Image
//                 src={card.image}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0"
//               />
//               </div>
//               {/* <div
//                 className={`p-8 h-80 rounded-xl shadow-lg ${card.bgClass} text-white`}
//               >
//                 <div className="flex flex-col h-[100%] justify-center">
//                   <h4 className="text-xl font-bold mb-4">{card.title}</h4>
//                   <p className="text-md">{card.description}</p>
//                 </div>
//               </div> */}
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <button
//         onClick={() => TwosliderRef.current.slickPrev()}
//         className="absolute cursor-pointer right-332 bottom-50 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-full shadow-md hover:bg-[white] hover:text-[#151583] transition"
//       >
//         <IoIosArrowBack className="w-6 h-6" />
//       </button>

//       <button
//         onClick={() => TwosliderRef.current.slickNext()}
//         className="absolute cursor-pointer -right-10 bottom-45 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-full shadow-md hover:bg-[white] hover:text-[#151583] transition"
//       >
//         <IoIosArrowForward className="w-6 h-6" />
//       </button>
//     </section>
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
  { src: "/new/3.jpg", alt: "third Image" },
  { src: "/new/4.jpg", alt: "fourth Image" },
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
    speed: 500,
    infinite: true,
    speed: 1000,
    loop: true,
    autoplaySpeed: 1000,

    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full h-screen">
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
                <div className="text-4xl font-bold">
                  Build a culture that’s felt—not just framed
                </div>
                <div className="text-white text-lg md:text-xl max-w-4xl mb-6">
                  Bespoke leadership and organizational solutions built for a
                  world that is continuously evolving. Turn uncertainty into
                  your strategic advantage.
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Left Arrow */}
      {/* <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <div
          className="border-2 border-white rounded-full flex justify-center items-center p-2 cursor-pointer hover:bg-transparent"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoIosArrowBack
            style={arrowStyle1}
            onMouseEnter={() => setArrowStyle1(hoverStyle)}
            onMouseLeave={() => setArrowStyle1(normalStyle)}
          />
        </div>
      </div>

      {/* Right Arrow */}
      {/* <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <div
          className="border-2 border-white rounded-full flex justify-center items-center p-2 cursor-pointer hover:bg-transparent"
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowForward
            style={arrowStyle2}
            onMouseEnter={() => setArrowStyle2(hoverStyle)}
            onMouseLeave={() => setArrowStyle2(normalStyle)}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
